json.set! @language.id do
    # @teachers.each do |teacher|
    json.set! @teachers.id do
        json.partial! 'api/teachers/teacher', teacher: @teachers
    end
    # end
end