/*******************************
 * 1) DỮ LIỆU TỪ VỰNG (ví dụ)
 * Thay/ví dụ bằng 1000 từ của bạn.
 *******************************/
// noun
// pronoun
// verb
// adjective
// adverb
// preposition
// conjunction
// interjection
const vocabularyList = [
    //    // { index: "", english: "", mean: "", pronunciation: "", partOfSpeech: "" },
    { index: "1", english: "tea", mean: "trà", pronunciation: "UK: /tiː/ | US: /tiː/", partOfSpeech: "noun" },
    { index: "2", english: "coffee", mean: "cà phê", pronunciation: "UK: /ˈkɒfi/ | US: /ˈkɔːfi/", partOfSpeech: "noun" },
    { index: "3", english: "welcome", mean: "chào mừng", pronunciation: "UK: /ˈwelkəm/ | US: /ˈwelkəm/", partOfSpeech: "verb, adjective, interjection" },
    { index: "4", english: "please", mean: "vui lòng, làm ơn", pronunciation: "UK: /pliːz/ | US: /pliːz/", partOfSpeech: "interjection, verb" },
    { index: "5", english: "or", mean: "hoặc", pronunciation: "UK: /ɔː/ | US: /ɔːr/", partOfSpeech: "conjunction" },
    { index: "6", english: "sugar", mean: "đường", pronunciation: "UK: /ˈʃʊɡə/ | US: /ˈʃʊɡər/", partOfSpeech: "noun" },
    { index: "7", english: "milk", mean: "sữa", pronunciation: "UK: /mɪlk/ | US: /mɪlk/", partOfSpeech: "noun" },
    { index: "8", english: "with", mean: "với", pronunciation: "UK: /wɪð/ | US: /wɪð/", partOfSpeech: "preposition" },
    { index: "9", english: "water", mean: "nước", pronunciation: "UK: /ˈwɔːtə/ | US: /ˈwɔːtər/", partOfSpeech: "noun" },
    { index: "10", english: "goodbye", mean: "tạm biệt", pronunciation: "UK: /ˌɡʊdˈbaɪ/ | US: /ˌɡʊdˈbaɪ/", partOfSpeech: "interjection, noun" },
    { index: "11", english: "and", mean: "và", pronunciation: "UK: /ænd/ | US: /ænd/", partOfSpeech: "conjunction" },
    { index: "12", english: "thank you", mean: "cảm ơn", pronunciation: "UK: /ˈθæŋk juː/ | US: /ˈθæŋk juː/", partOfSpeech: "interjection" },
    { index: "13", english: "Ball", mean: "Quả bóng", pronunciation: "/bɔːl/", partOfSpeech: "Noun" },
    { index: "14", english: "Bike", mean: "Xe đạp", pronunciation: "/baɪk/", partOfSpeech: "Noun" },
    { index: "15", english: "Book", mean: "Sách", pronunciation: "/bʊk/", partOfSpeech: "Noun" },
    { index: "16", english: "School", mean: "Trường học", pronunciation: "/skuːl/", partOfSpeech: "Noun" },
    { index: "17", english: "Play", mean: "Chơi", pronunciation: "/pleɪ/", partOfSpeech: "Verb" },
    { index: "18", english: "Ground", mean: "Mặt đất", pronunciation: "/ɡraʊnd/", partOfSpeech: "Noun" },
    { index: "19", english: "Playground", mean: "Sân chơi", pronunciation: "/ˈpleɪɡraʊnd/", partOfSpeech: "Noun" },
    { index: "20", english: "Listen", mean: "Lắng nghe", pronunciation: "/ˈlɪsən/", partOfSpeech: "Verb" },
    { index: "21", english: "Repeat", mean: "Lặp lại", pronunciation: "/rɪˈpiːt/", partOfSpeech: "Verb" },
    { index: "22", english: "In", mean: "Trong", pronunciation: "/ɪn/", partOfSpeech: "Preposition" },
    { index: "23", english: "Point", mean: "Điểm; chỉ vào", pronunciation: "/pɔɪnt/", partOfSpeech: "Noun / Verb" },
    { index: "24", english: "Say", mean: "Nói", pronunciation: "/seɪ/", partOfSpeech: "Verb" },
    { index: "25", english: "Lesson", mean: "Bài học", pronunciation: "/ˈlesən/", partOfSpeech: "Noun" },
    { index: "26", english: "Unit", mean: "Đơn vị; bài học", pronunciation: "/ˈjuːnɪt/", partOfSpeech: "Noun" },
    { index: "27", english: "Let", mean: "Cho phép; để", pronunciation: "/let/", partOfSpeech: "Verb" },
    { index: "28", english: "Talk", mean: "Nói chuyện", pronunciation: "/tɔːk/", partOfSpeech: "Verb" },
    { index: "29", english: "Sing", mean: "Hát", pronunciation: "/sɪŋ/", partOfSpeech: "Verb" },
    { index: "30", english: "Chant", mean: "Hô; hát theo nhịp, tụng kinh", pronunciation: "/tʃɑːnt/", partOfSpeech: "Verb / Noun" },
    { index: "31", english: "Tick", mean: "Đánh dấu ✓; tích", pronunciation: "/tɪk/", partOfSpeech: "Verb / Noun" },
    { index: "32", english: "Look", mean: "Nhìn", pronunciation: "/lʊk/", partOfSpeech: "Verb" },
    { index: "33", english: "Trace", mean: "Đồ theo; lần theo dấu vết, theo dõi", pronunciation: "/treɪs/", partOfSpeech: "Verb / Noun" },
    { index: "34", english: "Room", mean: "Phòng; không gian", pronunciation: "/ruːm/", partOfSpeech: "Noun" },
    { index: "35", english: "Dining", mean: "Ăn uống; dùng bữa", pronunciation: "/ˈdaɪnɪŋ/", partOfSpeech: "Noun / Adjective" },
    { index: "36", english: "Dining room", mean: "Phòng ăn", pronunciation: "/ˈdaɪnɪŋ ruːm/", partOfSpeech: "Noun" },
    { index: "37", english: "Extra", mean: "Thêm; bổ sung; dư", pronunciation: "/ˈekstrə/", partOfSpeech: "Adjective / Noun" },
    { index: "38", english: "Resource", mean: "Tài nguyên; nguồn lực", pronunciation: "/rɪˈsɔːrs/", partOfSpeech: "Noun" },
    { index: "39", english: "Glossary", mean: "Bảng chú giải; danh mục từ, bảng thuật ngữ", pronunciation: "/ˈɡlɒsəri/", partOfSpeech: "Noun" },
    { index: "40", english: "Cup", mean: "Cốc; tách", pronunciation: "/kʌp/", partOfSpeech: "Noun" },
    { index: "41", english: "Car", mean: "Xe hơi; ô tô", pronunciation: "/kɑːr/", partOfSpeech: "Noun" },
    { index: "42", english: "Cat", mean: "Con mèo", pronunciation: "/kæt/", partOfSpeech: "Noun" },
    { index: "43", english: "Cake", mean: "Bánh ngọt; bánh", pronunciation: "/keɪk/", partOfSpeech: "Noun" },
    { index: "44", english: "Load", mean: "Tải; chất hàng", pronunciation: "/ləʊd/", partOfSpeech: "Verb / Noun" },
    { index: "45", english: "Loading", mean: "Đang tải", pronunciation: "/ˈləʊdɪŋ/", partOfSpeech: "Noun / Adjective" },
    { index: "46", english: "Fun", mean: "Vui vẻ; niềm vui", pronunciation: "/fʌn/", partOfSpeech: "Noun / Adjective" },
    { index: "47", english: "Time", mean: "Thời gian; lần", pronunciation: "/taɪm/", partOfSpeech: "Noun" },
    { index: "48", english: "Find", mean: "Tìm; tìm thấy", pronunciation: "/faɪnd/", partOfSpeech: "Verb" },
    { index: "49", english: "Circle", mean: "Khoanh tròn; hình tròn", pronunciation: "/ˈsɜːrkəl/", partOfSpeech: "Verb / Noun" },
    { index: "50", english: "Then", mean: "Sau đó; rồi", pronunciation: "/ðen/", partOfSpeech: "Adverb" },
    { index: "51", english: "Color", mean: "Màu sắc; tô màu", pronunciation: "/ˈkʌlər/", partOfSpeech: "Noun / Verb" },
    { index: "52", english: "Colour", mean: "Màu sắc; tô màu", pronunciation: "/ˈkʌlər/", partOfSpeech: "Noun / Verb" },
    { index: "53", english: "Activity", mean: "Hoạt động", pronunciation: "/ækˈtɪvəti/", partOfSpeech: "Noun" },
    { index: "54", english: "Level", mean: "Cấp độ; mức độ; tầng", pronunciation: "/ˈlevəl/", partOfSpeech: "Noun / Adjective / Verb" },
    { index: "55", english: "Little", mean: "Nhỏ; ít", pronunciation: "/ˈlɪtəl/", partOfSpeech: "Adjective / Adverb / Determiner" },
    { index: "56", english: "Big", mean: "To; lớn", pronunciation: "/bɪɡ/", partOfSpeech: "Adjective" },
    { index: "57", english: "Show", mean: "Cho xem; trình diễn", pronunciation: "/ʃəʊ/", partOfSpeech: "Verb / Noun" },
    { index: "58", english: "Happy", mean: "Vui vẻ; hạnh phúc", pronunciation: "/ˈhæpi/", partOfSpeech: "Adjective" },
    { index: "59", english: "Street", mean: "Đường phố", pronunciation: "/striːt/", partOfSpeech: "Noun" },
    { index: "60", english: "Market", mean: "Chợ; thị trường", pronunciation: "/ˈmɑːrkɪt/", partOfSpeech: "Noun" },

];