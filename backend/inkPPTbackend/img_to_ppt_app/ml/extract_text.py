import pytesseract
import re

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def extract_text(binary_image):
    # Use Tesseract with LSTM engine and block-of-text segmentation
    custom_config = r'--oem 1 --psm 6'
    extracted_text = pytesseract.image_to_string(binary_image, config=custom_config)
    if not extracted_text.strip():
        print("[DEBUG] No text extracted!")
    else:
        print("[DEBUG] Extracted text:\n", extracted_text)  # For debugging, logs the raw OCR output
    return extracted_text

def preprocess_text(extracted_text):
    # remove special characters and artefacts
    text = re.sub(r'[^\w\s.,]', '', extracted_text)
    text = text.replace('\r\n', '\n').replace('\r','\n')
    text = re.sub(r'[^\S\n]+', ' ', text)
    text = '\n'.join([line.strip() for line in text.split('\n') if line.strip()])
    return text