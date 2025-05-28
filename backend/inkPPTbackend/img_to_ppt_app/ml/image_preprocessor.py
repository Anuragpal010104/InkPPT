import numpy as np
import cv2

def image_preprocessor(uploaded_file):
    file_bytes = uploaded_file.read()
    np_arr = np.frombuffer(file_bytes,np.uint8)
    image = cv2.imdecode(np_arr,cv2.IMREAD_COLOR)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5,5), 0)
    _, binary = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    return binary