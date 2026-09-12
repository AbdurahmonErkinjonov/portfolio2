from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def cv_page(request):
    return render(request, 'cv.html')

