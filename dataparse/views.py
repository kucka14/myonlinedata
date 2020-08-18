from django.shortcuts import render
from .forms import UploadFileForm
from .myfunctions import zip_to_dicts, create_output_dict

# Create your views here.

def index(request):

	form = UploadFileForm()
	output_dict = ''

	if request.method == 'POST':
		form = UploadFileForm(request.POST, request.FILES)
		if form.is_valid():
			uploaded_file = request.FILES['fileupload']
			
			fbdata_dict = zip_to_dicts(uploaded_file)
			
			output_dict = create_output_dict(fbdata_dict)
				
	
	return render(request,'dataparse/index.html',{'form':form,
												  'output_dict':output_dict,
												  })
