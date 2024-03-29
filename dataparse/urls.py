from django.urls import path

from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('privacy_policy', views.privacy_policy, name='privacy_policy'),
	path('robots.txt', views.robots, name='robots'),
	path('sitemap.xml', views.sitemap, name='sitemap'),
]
