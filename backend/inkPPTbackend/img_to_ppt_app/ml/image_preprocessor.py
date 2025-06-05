import numpy as np
import cv2

def image_preprocessor(uploaded_file):
    file_bytes = uploaded_file.read()
    np_arr = np.frombuffer(file_bytes, np.uint8)
    image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # Resize to make text larger (improves OCR for handwriting)
    scale_percent = 150  # increase size by 50%
    width = int(gray.shape[1] * scale_percent / 100)
    height = int(gray.shape[0] * scale_percent / 100)
    dim = (width, height)
    gray = cv2.resize(gray, dim, interpolation=cv2.INTER_LINEAR)
    # Denoise
    denoised = cv2.fastNlMeansDenoising(gray, None, 30, 7, 21)
    # Adaptive thresholding
    adaptive = cv2.adaptiveThreshold(
        denoised, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 31, 10
    )
    # Morphological operations to connect broken strokes
    kernel = np.ones((2, 2), np.uint8)
    morph = cv2.morphologyEx(adaptive, cv2.MORPH_CLOSE, kernel)
    return morph