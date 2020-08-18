from django import forms

class UploadFileForm(forms.Form):
	fileupload = forms.FileField(label='')
