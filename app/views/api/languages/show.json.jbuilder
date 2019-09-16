json.set! @language.id do
    json.set! @teachers.id do
        json.partial! 'api/teachers/teacher', teacher: @teachers
    end
end