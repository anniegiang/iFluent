# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_20_215333) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "teacher_id", null: false
    t.integer "student_id", null: false
    t.integer "lesson_item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "start_time", null: false
    t.integer "duration", null: false
    t.index ["lesson_item_id"], name: "index_bookings_on_lesson_item_id"
    t.index ["student_id"], name: "index_bookings_on_student_id"
    t.index ["teacher_id"], name: "index_bookings_on_teacher_id"
  end

  create_table "languages", force: :cascade do |t|
    t.string "language", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lesson_items", force: :cascade do |t|
    t.integer "lesson_id", null: false
    t.integer "duration", null: false
    t.float "price", null: false
  end

  create_table "lessons", force: :cascade do |t|
    t.integer "teacher_id", null: false
    t.string "language_name", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "lessons_taught"
  end

  create_table "open_slots", force: :cascade do |t|
    t.integer "time_slot_id", null: false
    t.integer "teacher_id", null: false
    t.boolean "available", default: true
    t.index ["time_slot_id", "teacher_id"], name: "index_open_slots_on_time_slot_id_and_teacher_id", unique: true
  end

  create_table "teacher_speaks", force: :cascade do |t|
    t.integer "teacher_id", null: false
    t.integer "language_id", null: false
    t.integer "fluency", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teacher_teaches", force: :cascade do |t|
    t.integer "teacher_id", null: false
    t.integer "language_id", null: false
    t.integer "fluency", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.integer "teacher_id", null: false
    t.string "country", null: false
    t.text "about_me", null: false
    t.string "title", null: false
    t.string "video_url"
    t.float "hourly_rate"
    t.float "trial_rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_id"], name: "index_teachers_on_teacher_id"
  end

  create_table "time_slots", force: :cascade do |t|
    t.datetime "start_time", null: false
    t.datetime "end_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_likes", force: :cascade do |t|
    t.integer "teacher_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_id"], name: "index_user_likes_on_teacher_id"
    t.index ["user_id"], name: "index_user_likes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_picture_url", default: "https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/default.13c19308.svg", null: false
    t.text "profile_about_me"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
