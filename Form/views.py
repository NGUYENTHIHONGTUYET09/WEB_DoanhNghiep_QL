from django.shortcuts import get_list_or_404
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from All_models.models import Form, FormType
from .serializers import FormTypeSerializer, CreateFormSerializer, FormSerializer, CustomFormSerializer


class GetFormByID(APIView):
    def post(self, request, id):
        response_data = []

        # Get forms sorted by created_at
        forms = get_list_or_404(Form.objects.order_by('-created_at'), employee_id=id)

        for form in forms:
            temp = {
                "created_at": form.created_at,
                "type": form.type.name,
                "title": form.title,
                "content": form.content,
                "status": form.status,
            }
            response_data.append(temp)

        return Response(response_data, status=status.HTTP_200_OK)


class GetFormType(generics.ListAPIView):
    queryset = FormType.objects.all()
    serializer_class = FormTypeSerializer


class CreateForm(APIView):
    def post(self, request):
        serializer = CreateFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Created", status=status.HTTP_200_OK)
        return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)


class FormView(generics.ListAPIView):
    queryset = Form.objects.all().order_by('-created_at')
    serializer_class = CustomFormSerializer


class UpdateFormView(generics.UpdateAPIView):
    queryset = Form.objects.all()
    serializer_class = FormSerializer
    lookup_field = 'id'


