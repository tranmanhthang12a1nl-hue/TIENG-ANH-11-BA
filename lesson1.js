const lesson1Data = {
    vocabReview: [
        { word: "work out", ipa: "/wɜːk aʊt/", mean: "Tập luyện thể hình, thể thao" },
        { word: "full of", ipa: "/fʊl əv/", mean: "Tràn đầy (năng lượng)" },
        { word: "diet", ipa: "/ˈdaɪ.ət/", mean: "Chế độ ăn uống" },
        { word: "balanced", ipa: "/ˈbælənst/", mean: "Cân bằng, điều độ" },
        { word: "fit", ipa: "/fɪt/", mean: "Cân đối, khỏe mạnh" }
    ],
    appliedVocab: [
        { q: "1. He goes to the gym every morning to _______ and stay healthy.", options: ["work out", "diet", "balanced", "fit"], answer: 0, exp: "Chọn 'work out' (tập luyện)." },
        { q: "2. My grandfather is 90 years old, but he is always _______ energy.", options: ["work out", "full of", "diet", "fit"], answer: 1, exp: "Chọn 'full of' (tràn đầy năng lượng)." },
        { q: "3. Eating a healthy _______ helps you avoid many diseases.", options: ["work out", "fit", "diet", "full of"], answer: 2, exp: "Chọn 'diet' (chế độ ăn)." },
        { q: "4. To stay healthy, you should eat a _______ diet with enough nutrients.", options: ["balanced", "work out", "fit", "full of"], answer: 0, exp: "Chọn 'balanced' (cân bằng)." },
        { q: "5. Doing exercise regularly helps you keep your body _______.", options: ["diet", "fit", "full of", "work out"], answer: 1, exp: "Chọn 'fit' (cân đối, khỏe mạnh)." },
        { q: "6. She loves to _______ at the fitness center after school.", options: ["work out", "balanced", "diet", "fit"], answer: 0, exp: "Chọn 'work out'." },
        { q: "7. Children need plenty of milk and vegetables to stay _______ and strong.", options: ["fit", "work out", "diet", "balanced"], answer: 0, exp: "Chọn 'fit'." },
        { q: "8. A _______ diet must include proteins, vitamins, and minerals.", options: ["balanced", "full of", "work out", "diet"], answer: 0, exp: "Chọn 'balanced'." },
        { q: "9. He decided to go on a strict _______ to lose weight.", options: ["diet", "fit", "work out", "full of"], answer: 0, exp: "Chọn 'diet'." },
        { q: "10. The children were excited and _______ energy during the sports day.", options: ["full of", "balanced", "fit", "work out"], answer: 0, exp: "Chọn 'full of'." }
    ],
    vocabQuiz: [
        { q: "1. Meaning of '(to) work out':", options: ["Ăn vặt", "Tập luyện thể thao", "Ngủ sớm", "Uống nước ngọt"], answer: 1, exp: "Work out là tập luyện thể thao." },
        { q: "2. Meaning of '(be) full of':", options: ["Tràn đầy", "Cạn kiệt", "Mệt mỏi", "Buồn ngủ"], answer: 0, exp: "Full of nghĩa là tràn đầy." },
        { q: "3. Meaning of 'diet':", options: ["Giày thể thao", "Chế độ ăn uống", "Bài tập về nhà", "Giờ giấc"], answer: 1, exp: "Diet là chế độ ăn uống." },
        { q: "4. Meaning of 'balanced':", options: ["Thiếu thốn", "Cân bằng", "Nặng nề", "Độc hại"], answer: 1, exp: "Balanced có nghĩa là cân bằng." },
        { q: "5. Meaning of 'fit':", options: ["Ốm yếu", "Cân đối, khỏe mạnh", "Già nua", "Béo phì"], answer: 1, exp: "Fit nghĩa là cân đối, khỏe mạnh." }
    ],
    listeningQuiz: [
        { text: "Living a long and healthy life is everyone's desire.", options: ["Sống một cuộc sống lâu và khỏe mạnh là mong ước của mọi người.", "Mọi người đều muốn ăn uống thoải mái.", "Cuộc sống ngắn ngủi và đầy rẫy thử thách."], answer: 0, exp: "Đúng nghĩa: Living a long and healthy life is everyone's desire." },
        { text: "Good genetics plays an important role in longevity.", options: ["Gen tốt đóng vai trò quan trọng trong việc sống trường thọ.", "Thể dục thể thao giúp bạn trẻ lâu hơn.", "Thức ăn nhanh làm giảm tuổi thọ."], answer: 0, exp: "Đúng nghĩa: Good genetics plays an important role in longevity." },
        { text: "We should maintain a balanced diet every day.", options: ["Chúng ta nên tập thể dục mỗi ngày.", "Chúng ta nên duy trì chế độ ăn cân bằng mỗi ngày.", "Chúng ta nên đi ngủ sớm hơn."], answer: 1, exp: "Đúng nghĩa: We should maintain a balanced diet every day." },
        { text: "Fresh fruits and vegetables are very good for health.", options: ["Thịt bò và gà rất tốt cho tim mạch.", "Trái cây tươi và rau củ rất tốt cho sức khỏe.", "Nước ngọt có ga giúp cơ thể khỏe mạnh."], answer: 1, exp: "Đúng nghĩa: Fresh fruits and vegetables are very good for health." },
        { text: "People should limit fast food and sugary drinks.", options: ["Mọi người nên ăn nhiều thức ăn nhanh.", "Mọi người nên hạn chế thức ăn nhanh và đồ uống có đường.", "Mọi người không nên uống nước lọc."], answer: 1, exp: "Đúng nghĩa: People should limit fast food and sugary drinks." },
        { text: "Regular physical activity keeps our hearts healthy.", options: ["Hoạt động thể chất đều đặn giúp tim mạch khỏe mạnh.", "Ngủ đủ giấc giúp tăng trưởng chiều cao.", "Ăn uống điều độ giúp da dẻ mịn màng."], answer: 0, exp: "Đúng nghĩa: Regular physical activity keeps our hearts healthy." },
        { text: "Working out at the gym is a great way to stay fit.", options: ["Tập gym là một cách tuyệt vời để giữ dáng.", "Đi ngủ muộn giúp tinh thần sảng khoái.", "Xem tivi giúp rèn luyện trí nhớ."], answer: 0, exp: "Đúng nghĩa: Working out at the gym is a great way to stay fit." },
        { text: "Getting enough sleep helps reduce stress effectively.", options: ["Ăn uống nhiều giúp giảm căng thẳng.", "Ngủ đủ giấc giúp giảm stress hiệu quả.", "Làm việc quá sức giúp sống lâu hơn."], answer: 1, exp: "Đúng nghĩa: Getting enough sleep helps reduce stress effectively." },
        { text: "Avoiding smoking protects your lungs and body.", options: ["Tránh hút thuốc bảo vệ lá phổi và cơ thể bạn.", "Uống rượu bia giúp tăng cường trí nhớ.", "Thức khuya giúp làm việc hiệu quả hơn."], answer: 0, exp: "Đúng nghĩa: Avoiding smoking protects your lungs and body." },
        { text: "These positive habits improve our quality of life.", options: ["Những thói quen tích cực này cải thiện chất lượng cuộc sống của chúng ta.", "Những thói quen xấu làm chúng ta thông minh hơn.", "Lười vận động giúp cơ thể tràn đầy năng lượng."], answer: 0, exp: "Đúng nghĩa: These positive habits improve our quality of life." }
    ],
    grammarTitle: "Quá khứ đơn & Hiện tại hoàn thành (10 câu)",
    grammarQuiz: [
        { q: "1. In the past, Nam (eat) _______ a lot of fast food.", options: ["eat", "ate", "has eaten", "eats"], answer: 1, exp: "Có 'In the past' dùng Quá khứ đơn (ate)." },
        { q: "2. He _______ (start) eating healthy food since last summer.", options: ["starts", "started", "has started", "is starting"], answer: 2, exp: "Có 'since' dùng Hiện tại hoàn thành." },
        { q: "3. His grandfather _______ just celebrate his 90th birthday.", options: ["has just celebrated", "celebrated", "celebrates", "is celebrating"], answer: 0, exp: "Dùng Hiện tại hoàn thành với 'just'." },
        { q: "4. I _______ (visit) my grandfather during my last summer holiday.", options: ["visit", "visited", "have visited", "am visiting"], answer: 1, exp: "Có 'last summer holiday' dùng Quá khứ đơn." },
        { q: "5. We _______ (already/learn) a lot of important life lessons.", options: ["learn", "learned", "have already learnt", "are learning"], answer: 2, exp: "Có 'already' dùng Hiện tại hoàn thành." },
        { q: "6. She _______ (not/eat) fast food for two months.", options: ["didn't eat", "doesn't eat", "hasn't eaten", "wasn't eating"], answer: 2, exp: "Có khoảng thời gian 'for two months' dùng Hiện tại hoàn thành." },
        { q: "7. My father _______ (stop) smoking last year.", options: ["stops", "stopped", "has stopped", "is stopping"], answer: 1, exp: "Có 'last year' dùng Quá khứ đơn." },
        { q: "8. They _______ (be) close friends since they were children.", options: ["are", "were", "have been", "had been"], answer: 2, exp: "Mệnh đề 'since' chia Hiện tại hoàn thành." },
        { q: "9. Look! He _______ (do) morning exercises in the park.", options: ["does", "did", "has done", "is doing"], answer: 3, exp: "Có 'Look!' chia Hiện tại tiếp diễn." },
        { q: "10. How long _______ you _______ (live) in this city?", options: ["did / live", "have / lived", "do / live", "are / living"], answer: 1, exp: "Hỏi với 'How long' dùng Hiện tại hoàn thành." }
    ],
    readingTitle: "Reading Passage: Secrets to a Long and Healthy Life",
    readingPassage: "Living a long and healthy life is something that everyone desires. According to recent scientific studies, longevity is not only a matter of good genetics but also depends heavily on our daily habits. First, maintaining a balanced diet rich in fresh fruits, vegetables, and whole grains plays a vital role. People should limit fast food, excessive sodium, and sugary drinks. Second, regular physical activity is essential. Whether it is working out at the gym, swimming, or simply walking in the park for 30 minutes a day, staying active keeps our muscles strong and our hearts healthy. Finally, getting enough good sleep and avoiding harmful habits like smoking or staying up late help reduce stress and keep our bodies full of energy. By adopting these positive changes, we can greatly improve our quality of life and live longer.",
    readingTF: [
        { q: "1. Longevity depends only on good genetics according to the text.", options: ["True", "False"], answer: 1, exp: "False: Phụ thuộc cả vào thói quen hằng ngày." },
        { q: "2. A balanced diet should include fresh fruits, vegetables, and whole grains.", options: ["True", "False"], answer: 0, exp: "True: Được nêu rõ trong bài đọc." },
        { q: "3. People are advised to eat more fast food and sugary drinks.", options: ["True", "False"], answer: 1, exp: "False: Phải hạn chế (limit)." },
        { q: "4. Regular physical activity helps keep muscles strong and hearts healthy.", options: ["True", "False"], answer: 0, exp: "True: Giúp cơ bắp khỏe và tim mạch tốt." },
        { q: "5. Avoiding harmful habits like smoking can reduce stress and increase energy.", options: ["True", "False"], answer: 0, exp: "True: Giúp cơ thể tràn đầy năng lượng." }
    ],
    readingFill: [
        { q: "1. Longevity depends heavily on our daily _______.", options: ["habits", "jobs", "grades", "classes"], answer: 0, exp: "Từ trong bài: 'daily habits'." },
        { q: "2. People should limit fast food, excessive sodium, and sugary _______.", options: ["drinks", "fruits", "waters", "grains"], answer: 0, exp: "Từ trong bài: 'sugary drinks'." },
        { q: "3. Staying active keeps our muscles strong and our hearts _______.", options: ["healthy", "weak", "tired", "sad"], answer: 0, exp: "Từ trong bài: 'hearts healthy'." },
        { q: "4. Avoiding harmful habits like _______ helps reduce stress.", options: ["smoking", "reading", "walking", "cooking"], answer: 0, exp: "Từ trong bài: 'smoking'." },
        { q: "5. By adopting positive changes, we improve our quality of _______.", options: ["life", "work", "sleep", "study"], answer: 0, exp: "Từ trong bài: 'quality of life'." }
    ],
    readingMC: [
        { q: "1. What is longevity based on according to the text?", options: ["Only genetics", "Genetics and daily habits", "Only exercise", "Only sleep"], answer: 1, exp: "Cả di truyền và thói quen hằng ngày." },
        { q: "2. What types of food are encouraged in a balanced diet?", options: ["Fast food", "Fresh fruits, vegetables, and whole grains", "Sugary drinks", "Excessive sodium"], answer: 1, exp: "Trái cây tươi, rau củ và ngũ cốc nguyên hạt." },
        { q: "3. How long should you walk or stay active each day as suggested?", options: ["5 minutes", "10 minutes", "30 minutes", "3 hours"], answer: 2, exp: "Khoảng 30 phút mỗi ngày." },
        { q: "4. Which of the following is considered a harmful habit in the text?", options: ["Working out", "Getting enough sleep", "Smoking", "Eating vegetables"], answer: 2, exp: "Hút thuốc (smoking) là thói quen có hại." },
        { q: "5. What is the main purpose of the reading passage?", options: ["To discuss secrets to a long and healthy life", "To complain about fast food", "To advertise a gym", "To teach how to cook"], answer: 0, exp: "Bàn về bí quyết sống lâu và khỏe mạnh." }
    ],
    writingGuides: [
        { struct: "To stay fit and healthy, I always try to...", mean: "Để giữ vóc dáng cân đối và khỏe mạnh, tôi luôn cố gắng..." },
        { struct: "Every morning, I do regular exercise / work out because...", mean: "Mỗi buổi sáng, tôi tập thể dục đều đặn / tập luyện vì..." },
        { struct: "Besides, I maintain a balanced diet with...", mean: "Bên cạnh đó, tôi duy trì chế độ ăn cân bằng với..." },
        { struct: "I have given up bad habits like... to keep full of energy.", mean: "Tôi đã từ bỏ những thói quen xấu như... để giữ cơ thể tràn đầy năng lượng." }
    ],
    writingKeys: ["work out", "full of energy", "balanced diet", "regular exercise", "stay up late"]
};