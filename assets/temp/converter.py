"""
Purpose: Chuyển data theo format mới của team về format cũ của mấy anh để các logic xử lý có thể hoạt động được
Comment: OLD DATA FORMAT SUCKS!
"""
import json
import os

def convert_json(json_new_format):
    json_new = [
        {
            "word": "thực hiện",
            "voice": "n/a",
            "verb": {
                "desc": "Làm một việc gì đó theo kế hoạch.",
                "example": "Khi bạn làm bài tập về nhà, bạn đang thực hiện bài tập đó.",
                "synonym": "Làm, thực hành, tiến hành.",
                "antonym": "Ngừng, bỏ qua, không làm.",
                "image": "n/a"
            },
            "adj": {},
            "noun": {}
        },
        {
            "word": "second example word",
            "voice": "n/a",
            "verb": {},
            "adj": {}
        },
    ]
    json_old = {
        "bò": {
            "noun": [
                {
                    "defination": "Bò là tên gọi chung để c",
                    "example": [
                        "Con bò đang ăn cỏ",
                        "Đó có thể là những buổi chiều tuổi thơ chăn bò, thả diều cùng bạn"
                    ],
                    "synonyms": [],
                    "antonyms": []
                }
            ],
            "verb": [],
            "adj": [
                {
                    "defination": "",
                    "example": [],
                    "synonyms": [],
                    "antonyms": []
                }
            ],
            "img": [
                {
                    "url": "",
                    "title": ""
                }
            ],
            "audio": [
                {
                    "url": "",
                    "title": ""
                }
            ]
        }
    }
    json_final = "TO-DO: Proof left as exercises for readers"

    json_old_format = {}
    for entry in json_new_format:
        # print(entry)
        def convert_single_form_definition(word_form):
            def process_onym_list(words):
                return list(words[:-1].lower().split(', ')) if words != "" else [] # [:-1] remove final dot
            nonlocal entry
            form_def = entry.get(word_form, 0)
            return {
                "defination": form_def["desc"],
                "example": [form_def["example"]],
                "synonyms": process_onym_list(form_def.get("synonym", "")),
                "antonyms": process_onym_list(form_def.get("antonym", "")),
            } if form_def != 0 else {
                "defination": "Không có định nghĩa cho từ này",
                "example": [],
                "synonyms": [],
                "antonyms": []
            }
        word_forms = ["noun", "verb", "adj"]
        new_entry = {}
        for form in word_forms:
            new_entry[form] = [convert_single_form_definition(form)]
        for field in ["audio", "img"]: # temporarily ignore image and audio\
            new_entry[field] = [
                {
                    "url": "",
                    "title": ""
                }
            ]
        key = entry['word']
        json_old_format[key] = new_entry
        
    with open("word-data.json", "w", encoding="utf-8") as file:
        json.dump(json_old_format, file, ensure_ascii=False, indent=4)

    print("Converted JSON has been saved to ready.json")

with open("output.json", "r", encoding="utf-8") as file:
    json_new_format = json.load(file)
convert_json(json_new_format)
