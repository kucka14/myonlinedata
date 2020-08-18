import json
from zipfile import ZipFile
import datetime

files_list = [
			 	['off_facebook_activity','ads_and_businesses/your_off-facebook_activity.json'],
			 	['advertiser_uploads','ads_and_businesses/advertisers_who_uploaded_a_contact_list_with_your_information.json'],
			 ]

def zip_to_dicts(uploaded_file):
	
	fbdata_dict = {}
	
	with ZipFile(uploaded_file, 'r') as zipObj:
	
		for f in files_list:
			
			fbytes = zipObj.read(f[1])
			fstring = fbytes.decode('utf-8')
			fdict = json.loads(fstring)
			fbdata_dict[f[0]] = fdict
			
	return fbdata_dict
	
	

	
def create_output_dict(fbdata_dict):
	
	off_facebook_activity = {}
	for item in fbdata_dict['off_facebook_activity']['off_facebook_activity']:
		name = item['name']
		off_facebook_activity[name] = []
		for event in item['events']:
			fulldate = datetime.datetime.fromtimestamp(event['timestamp'])
			date = fulldate.strftime('%B %d, %Y')
			time = fulldate.strftime('%I:%M %p')
			off_facebook_activity[name].append([date,time,event['type']])
		
	advertiser_uploads = []
	for item in fbdata_dict['advertiser_uploads']['custom_audiences']:
		advertiser_uploads.append(item)
		
#	search history
#	about you - peer friend group
#	about you - profiles visited
#	security and login info
		
	output_dict = {
				   'off_facebook_output':off_facebook_activity,
				   'advertiser_upload_output':advertiser_uploads,
				  }
	
	return output_dict
		
			
		
		
		
		
		
		
		
