from django.shortcuts import get_list_or_404
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from All_models.models import Employee
from .serializers import EmployeeSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from PIL import Image
from io import BytesIO


class EmployeeView(generics.ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class UploadEmployeeView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        # Get data from request
        name = request.data.get('name')
        citizen_id = request.data.get('citizen_id')
        birthdate = request.data.get('birthdate')
        phone = request.data.get('phone')
        appointment_date = request.data.get('appointment_date')
        image_file = request.FILES.get('image')

        # Check if image file exists
        if image_file:
            try:
                # Open the image using Pillow
                img = Image.open(image_file)

                # Process the image if needed (resize, convert format, etc.)
                # For example:
                # img = img.resize((width, height))

                # Save the processed image to a BytesIO object
                buffer = BytesIO()
                img.save(buffer, format='JPEG')  # or any other format you prefer

                # Save the image file to your desired location
                # For example:
                # with open('path/to/save/image.jpg', 'wb') as f:
                #     f.write(buffer.getvalue())

                # Assuming you have a model Employee
                # Save other fields to the database
                employee = Employee.objects.create(
                    name=name,
                    citizen_id=citizen_id,
                    birthdate=birthdate,
                    phone=phone,
                    appointment_date=appointment_date,
                    # Assign the image field to the saved file path or BytesIO object
                    image='path/to/saved/image.jpg'  # or buffer.getvalue() if using BytesIO
                )

                # Return success response
                return Response({'message': 'Employee created successfully'}, status=201)

            except Exception as e:
                # Return error response if any exception occurs
                return Response({'error': str(e)}, status=500)

        else:
            # Return error response if no image file provided
            return Response({'error': 'No image file provided'}, status=400)
