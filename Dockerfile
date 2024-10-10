FROM public.ecr.aws/docker/library/python:latest

WORKDIR /app

COPY . .

RUN pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
RUN pip install -r requirements.txt

EXPOSE 3000

CMD ["python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=3000"]