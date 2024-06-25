FROM public.ecr.aws/docker/library/python:latest

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=5000"]