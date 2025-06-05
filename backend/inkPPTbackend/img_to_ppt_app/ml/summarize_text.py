import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

gemini_api_key = os.getenv("GEMINI_API_KEY")

genai.configure(api_key="AIzaSyDUeL3cIHH5SoIoVlOEl8jnzRjXmR0BQ3w")

model = genai.GenerativeModel("gemini-1.5-flash")

def generate_title(text):
    prompt = f"Generate a 1-5 word title for the following content for a presentation:\n\n{text}"
    response = model.generate_content(prompt)
    return response.text


def generate_summary(text):
    prompt = f"Write only plain text and no markdown language. Summarize the following content in bullet points for a presentation:\n\n{text}"
    response = model.generate_content(prompt)
    return response.text
