from pptx import Presentation

def create_presentation(structured_text, output_file="presentation.pptx"):
    
    prs = Presentation()

    for slide_data in structured_text:
        slide = prs.slides.add_slide(prs.slide_layouts[1])
        slide.shapes.title.text = slide_data["title"]
        content = slide.placeholders[1]
        content.text += f"{slide_data['summary']}\n"
        
    prs.save(output_file)