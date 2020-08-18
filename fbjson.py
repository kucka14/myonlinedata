import json

f = open('fbdata/ads_and_businesses/your_off-facebook_activity.json', 'r')
json_string = f.read()
f.close()

for item in json_dict['off_facebook_activity']:
	print(item['name'])
	
f = open('fbdata/ads_and_businesses/advertisers_who_uploaded_a_contact_list_with_your_information.json', 'r')
json_string = f.read()
f.close()

for item in json_dict['custom_audiences']:
	print(item)
