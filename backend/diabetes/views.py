import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from django.shortcuts import render
from rest_framework.response import Response
from .models    import Information
from rest_framework.views import APIView
from .serializers import InformationSerializer
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
class InfoListAPI(APIView):
    def get(self, request):

        queryset = Information.objects.all()
        print(queryset)
        serializer = InformationSerializer(queryset,many=True)
        return Response(serializer.data)
@api_view(["POST"])
@csrf_exempt
def index(request):
    serializer = InformationSerializer(data=request.data)
    if serializer.is_valid():
        glucose = serializer.validated_data['glucose']
        age = serializer.validated_data['age']
        bmi = int(serializer.validated_data['bmi'])
        bloodPressure = int(serializer.validated_data['bloodPressure'])
        pregnancies = int(serializer.validated_data['pregnancies'])
        weight = int(serializer.validated_data['weight'])
        height =int( serializer.validated_data['height'])
        skinThickness = serializer.validated_data['skinThickness']
        insulin = serializer.validated_data['insulin']
        diabetesPedigreeFn = serializer.validated_data['diabetesPedigreeFn']
 
        datacv = pd.read_csv(r"D:\nodejs-projects\diabetes-django\diabetes-ml\backend\diabetes.csv")
        X = datacv.drop("Outcome", axis=1)
        Y = datacv["Outcome"]
        print('outcome')

        X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2)
        model = LogisticRegression(max_iter=1000)
        model.fit(X_train, Y_train)

        pred = model.predict(np.array([glucose, age, bmi, bloodPressure, pregnancies, skinThickness, insulin, diabetesPedigreeFn]).reshape(1, -1))
        
        result = ''
        if pred ==  [1]:
            result = 'Positive'
        else: 
            result= 'Negative'
        return Response({'status': 'success', 'result': result})
    else:
        return Response(serializer.errors, status=400)