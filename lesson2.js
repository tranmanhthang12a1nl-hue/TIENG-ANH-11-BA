const lesson2Data = {
    vocabReview: [
        { word: "treatment", ipa: "/ˈtriːtmənt/", mean: "Sự điều trị, phép chữa bệnh" },
        { word: "strength", ipa: "/streŋθ/", mean: "Sức mạnh, thể lực" },
        { word: "muscles", ipa: "/ˈmʌslz/", mean: "Cơ bắp" },
        { word: "suffer (from)", ipa: "/ˈsʌfər/", mean: "Chịu đựng, mắc bệnh gì" },
        { word: "examine", ipa: "/ɪɡˈzæmɪn/", mean: "Khám bệnh, kiểm tra y tế" }
    ],
    appliedVocab: [
        { q: "1. The doctor _________ her carefully, but could not find anything wrong.", options: ["examined", "treated", "suffered", "strengthened"], answer: 0, exp: "Chọn 'examined' (khám bệnh)." },
        { q: "2. He is receiving _________ for his health problem at the hospital.", options: ["treatment", "strength", "muscle", "exam"], answer: 0, exp: "Chọn 'treatment' (sự điều trị)." },
        { q: "3. Regular exercise can help you improve your muscle _________.", options: ["strength", "treatment", "examine", "suffer"], answer: 0, exp: "Chọn 'strength' (sức mạnh cơ bắp)." },
        { q: "4. To build your _________, you can try lifting weights regularly.", options: ["strength", "treatment", "exam", "muscle"], answer: 0, exp: "Chọn 'strength' (thể lực/sức mạnh)." },
        { q: "5. Nam can’t sleep well because he is _____________ stress.", options: ["suffering from", "examining", "treating", "improving"], answer: 0, exp: "Chọn 'suffering from' (chịu đựng/mắc phải căng thẳng)." },
        { q: "6. She had a bad cough and had to go to the clinic for medical _______.", options: ["treatment", "strength", "examine", "muscle"], answer: 0, exp: "Chọn 'treatment'." },
        { q: "7. Proteins help build and repair body _______ after exercising.", options: ["muscles", "treatments", "strengths", "exams"], answer: 0, exp: "Chọn 'muscles' (cơ bắp)." },
        { q: "8. Many elderly people _________ from joint pain in winter.", options: ["suffer", "examine", "treat", "strengthen"], answer: 0, exp: "Chọn 'suffer' (mắc phải/chịu đựng)." },
        { q: "9. The specialist is going to _________ the patient's heart rate.", options: ["examine", "suffer", "treat", "strength"], answer: 0, exp: "Chọn 'examine' (kiểm tra/khám)." },
        { q: "10. Doing yoga regularly helps increase physical _________ and flexibility.", options: ["strength", "treatment", "muscle", "disease"], answer: 0, exp: "Chọn 'strength'." }
    ],
    vocabQuiz: [
        { q: "1. Meaning of 'treatment':", options: ["Sự điều trị", "Sức khỏe", "Cơ bắp", "Sự khám bệnh"], answer: 0, exp: "Treatment là sự điều trị." },
        { q: "2. Meaning of 'strength':", options: ["Sức mạnh", "Sự mệt mỏi", "Bệnh tật", "Thuốc men"], answer: 0, exp: "Strength nghĩa là sức mạnh." },
        { q: "3. Meaning of 'muscles':", options: ["Xương khớp", "Cơ bắp", "Mạch máu", "Dây thần kinh"], answer: 1, exp: "Muscles là cơ bắp." },
        { q: "4. Meaning of 'suffer from':", options: ["Chữa khỏi", "Chịu đựng / mắc bệnh", "Tập thể dục", "Khám bệnh"], answer: 1, exp: "Suffer from nghĩa là chịu đựng hoặc mắc bệnh gì." },
        { q: "5. Meaning of 'examine':", options: ["Khám bệnh / kiểm tra", "Phẫu thuật", "Nghỉ ngơi", "Uống thuốc"], answer: 0, exp: "Examine là khám bệnh hoặc kiểm tra kỹ lưỡng." }
    ],
    listeningQuiz: [
        { text: "Do you exercise every day? Yes, I do.", options: ["Bạn có tập thể dục mỗi ngày không? Có, tôi có.", "Bạn có ăn rau không? Không, tôi không.", "Bạn có đi ngủ sớm không? Có, tôi có."], answer: 0, exp: "Đúng nghĩa câu nói." },
        { text: "Does she eat a balanced diet? Yes, she does.", options: ["Cô ấy có ăn chế độ cân bằng không? Có, cô ấy có.", "Anh ấy có tập gym không? Có, anh ấy có.", "Họ có uống nhiều nước không? Có, họ có."], answer: 0, exp: "Đúng nghĩa câu nói." },
        { text: "Can I drink cold water after working out?", options: ["Tôi có thể uống nước lạnh sau khi tập luyện không?", "Tôi có thể đi bơi vào buổi sáng không?", "Tôi có thể ăn đồ ngọt vào buổi tối không?"], answer: 0, exp: "Đúng nghĩa câu nói." },
        { text: "Could we improve our muscle strength?", options: ["Chúng ta có thể cải thiện sức mạnh cơ bắp không?", "Chúng ta có thể giảm cân nhanh chóng không?", "Chúng ta có thể ngủ nhiều hơn không?"], answer: 0, exp: "Đúng nghĩa câu nói." },
        { text: "Were they suffering from severe stress?", options: ["Họ có bị căng thẳng nặng không?", "Họ có đang tập thể dục không?", "Họ có đi khám bác sĩ không?"], answer: 0, exp: "Đúng nghĩa câu nói." },
        { text: "Has he started the medical treatment yet?", options: ["Anh ấy đã bắt đầu điều trị y tế chưa?", "Cô ấy đã khỏi bệnh chưa?", "Bác sĩ đã khám xong chưa?"], answer: 0, exp: "Đúng nghĩa câu nói." },
        { text: "Have you started working out again?", options: ["Bạn đã bắt đầu tập luyện trở lại chưa?", "Bạn đã nghỉ học từ bao giờ thế?", "Bạn đã ăn tối chưa?"], answer: 0, exp: "Đúng nghĩa câu nói." },
        { text: "Was it your grandfather who taught you?", options: ["Có phải ông của bạn là người đã dạy bạn không?", "Có phải bác sĩ là người đã khám cho bạn không?", "Có phải bố bạn là người đã nấu ăn không?"], answer: 0, exp: "Đúng nghĩa câu nói." },
        { text: "Yes, I have.", options: ["Vâng, đúng vậy (Hiện tại hoàn thành).", "Không, tôi chưa từng.", "Vâng, tôi đã làm hôm qua."], answer: 0, exp: "Đúng nghĩa câu nói." },
        { text: "Yes, it was.", options: ["Vâng, đúng vậy (Quá khứ đơn).", "Không, không phải.", "Vâng, tôi có thể."], answer: 0, exp: "Đúng nghĩa câu nói." }
    ],
    grammarTitle: "Past simple vs. Present perfect (10 câu)",
    grammarQuiz: [
        { q: "1. He (see) _________ the doctor yesterday.", options: ["saw", "has seen", "sees", "is seeing"], answer: 0, exp: "Có 'yesterday' chia Quá khứ đơn (saw)." },
        { q: "2. She (suffer) _________ from a serious headache, but after treatment, she felt better.", options: ["suffered", "has suffered", "suffers", "is suffering"], answer: 0, exp: "Hành động xảy ra và kết thúc trong quá khứ dùng Quá khứ đơn." },
        { q: "3. Our living conditions (improve) __________________ over the last few decades.", options: ["improved", "have improved", "improve", "were improving"], answer: 1, exp: "Có 'over the last few decades' dùng Hiện tại hoàn thành." },
        { q: "4. The doctor (just, examine) _________________ her. Fortunately, she is fine now.", options: ["has just examined", "examined", "just examined", "was examining"], answer: 0, exp: "Có 'just' diễn tả hành động vừa mới xảy ra dùng Hiện tại hoàn thành." },
        { q: "5. I _________ (live) in this city since 2010.", options: ["lived", "have lived", "live", "am living"], answer: 1, exp: "Có 'since' dùng Hiện tại hoàn thành." },
        { q: "6. They _________ (move) to a new house last month.", options: ["moved", "have moved", "move", "moving"], answer: 0, exp: "Có 'last month' dùng Quá khứ đơn." },
        { q: "7. My father _________ (already / take) his medicine.", options: ["took", "has already taken", "already took", "takes"], answer: 1, exp: "Có 'already' dùng Hiện tại hoàn thành." },
        { q: "8. We _________ (visit) our grandparents last weekend.", options: ["visited", "have visited", "visit", "were visiting"], answer: 0, exp: "Có 'last weekend' dùng Quá khứ đơn." },
        { q: "9. She _________ (not finish) her homework yet.", options: ["didn't finish", "hasn't finished", "don't finish", "wasn't finished"], answer: 1, exp: "Có 'yet' ở câu phủ định dùng Hiện tại hoàn thành." },
        { q: "10. Einstein _________ (be) a great scientist in the 20th century.", options: ["was", "has been", "is", "were"], answer: 0, exp: "Mốc thời gian trong quá khứ đã qua dùng Quá khứ đơn." }
    ],
    readingTitle: "Reading Passage: Staying Healthy and Active",
    readingPassage: "Staying healthy requires a combination of good habits, proper medical care, and mental well-being. Over the past few years, many people have changed their lifestyles to improve their health. For instance, more individuals have started working out at local gyms to build muscle strength and flexibility. Medical check-ups also play a crucial role; doctors examine patients regularly to prevent serious illnesses before they develop. Furthermore, eating a balanced diet and getting enough sleep help people avoid suffering from chronic stress and fatigue. By making these positive adjustments, individuals can enjoy a much longer and healthier life.",
    readingTF: [
        { q: "1. Staying healthy only requires proper medical care according to the text.", options: ["True", "False"], answer: 1, exp: "False: Cần sự kết hợp của nhiều yếu tố." },
        { q: "2. Many people have changed their lifestyles to improve their health recently.", options: ["True", "False"], answer: 0, exp: "True: Được nêu rõ trong bài." },
        { q: "3. Working out at gyms helps build muscle strength and flexibility.", options: ["True", "False"], answer: 0, exp: "True: Giúp xây dựng sức mạnh cơ bắp." },
        { q: "4. Doctors examine patients only after serious illnesses develop.", options: ["True", "False"], answer: 1, exp: "False: Khám định kỳ để phòng ngừa." },
        { q: "5. Balanced diet and good sleep help prevent chronic stress and fatigue.", options: ["True", "False"], answer: 0, exp: "True: Giúp tránh căng thẳng." }
    ],
    readingFill: [
        { q: "1. Staying healthy requires a combination of good habits and proper medical _______.", options: ["care", "food", "sleep", "sport"], answer: 0, exp: "Từ trong bài: 'medical care'." },
        { q: "2. More individuals have started working out at local gyms to build muscle _______.", options: ["strength", "pain", "stress", "fatigue"], answer: 0, exp: "Từ trong bài: 'muscle strength'." },
        { q: "3. Doctors _________ patients regularly to prevent serious illnesses.", options: ["examine", "treat", "suffer", "ignore"], answer: 0, exp: "Từ trong bài: 'examine patients'." },
        { q: "4. Eating a balanced diet helps people avoid suffering from chronic _______.", options: ["stress", "joy", "strength", "energy"], answer: 0, exp: "Từ trong bài: 'chronic stress'." },
        { q: "5. By making these positive adjustments, individuals can enjoy a longer _______.", options: ["life", "work", "class", "trip"], answer: 0, exp: "Từ trong bài: 'longer and healthier life'." }
    ],
    readingMC: [
        { q: "1. What is required to stay healthy according to the text?", options: ["Only good food", "Good habits, medical care, and mental well-being", "Only going to the gym", "Only taking medicine"], answer: 1, exp: "Sự kết hợp của thói quen tốt, chăm sóc y tế và tinh thần." },
        { q: "2. Why do people go to local gyms?", options: ["To sleep", "To build muscle strength and flexibility", "To see a doctor", "To eat fast food"], answer: 1, exp: "Để xây dựng sức mạnh cơ bắp và sự dẻo dai." },
        { q: "3. What is the purpose of regular medical check-ups?", options: ["To prevent serious illnesses", "To cause stress", "To waste time", "To gain weight"], answer: 0, exp: "Để phòng ngừa các bệnh nghiêm trọng." },
        { q: "4. What helps avoid chronic stress and fatigue?", options: ["Balanced diet and enough sleep", "Working all night", "Eating fast food", "Skipping meals"], answer: 0, exp: "Chế độ ăn cân bằng và ngủ đủ giấc." },
        { q: "5. What is the main idea of the passage?", options: ["Methods to stay healthy and live longer", "How to cure a headache", "Benefits of fast food", "History of gym sports"], answer: 0, exp: "Các phương pháp để duy trì sức khỏe." }
    ],
    writingGuides: [
        { struct: "Recently, I have started to...", mean: "Gần đây, tôi đã bắt đầu..." },
        { struct: "Last month, I decided to improve my health by...", mean: "Tháng trước, tôi đã quyết định cải thiện sức khỏe bằng cách..." },
        { struct: "To build muscle strength, I usually...", mean: "Để xây dựng sức mạnh cơ bắp, tôi thường..." },
        { struct: "I have maintained this healthy habit for...", mean: "Tôi đã duy trì thói quen lành mạnh này được..." }
    ],
    writingKeys: ["treatment", "strength", "muscles", "examine", "suffering from"]
};