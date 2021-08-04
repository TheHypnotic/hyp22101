from django.shortcuts import render

def home(request):
    return render(request,'index.html')

def aboutus(request):
    return render(request,'aboutus.html')

def camera(request):
    return render(request,'camera.html')

def giftcard(request):
    return render(request,'gift-card.html')

def laptop(request):
    return render(request,'laptop.html')

def sp(request):
    return render(request,'sp.html')
