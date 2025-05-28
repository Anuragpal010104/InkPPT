from .image_preprocessor import image_preprocessor
from .extract_text import extract_text,preprocess_text
from .summarize_text import generate_title, generate_summary
from .generate_ppt import create_presentation

def generate_presentation_from_images(images, output_ppt = "output.pptx"):
    
    preprocessed_images = []
    for image in images:
        preprocessed_images.append(image_preprocessor(image))
    
    extracted_texts = []
    for img in preprocessed_images:
        extracted_texts.append(preprocess_text(extract_text(img)))
    
    summarized_texts = []
    for text in extracted_texts:
        title = generate_title(text)
        summary = generate_summary(text)
        summarized_texts.append({"title":title,"summary":summary})

    create_presentation(summarized_texts,output_ppt)