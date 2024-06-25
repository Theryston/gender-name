FROM public.ecr.aws/docker/library/python:latest

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE 3000

CMD ["python3", "-m" , "flask", "run", "--port=3000"]