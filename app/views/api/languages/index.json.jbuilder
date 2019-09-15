@languages.each do |language|
  json.set! language.id do
    json.extract! language, :id, :language
  end
end
