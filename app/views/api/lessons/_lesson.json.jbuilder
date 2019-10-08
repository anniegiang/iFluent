json.extract! lesson,
    :id,
    :teacher_id, 
    :language_name, 
    :title, 
    :description, 
    :category, 
    :lessons_taught
    json.lessonItems lesson.lesson_items

