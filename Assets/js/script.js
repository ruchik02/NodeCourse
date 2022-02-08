//handling emojis with respect to different task categories
var category_boxes = document.querySelectorAll(".list-category");
var category_box_texts = document.querySelectorAll('#category-box-text');

for (let i = 0; i < category_boxes.length; i++) {
    if (category_box_texts[i].innerText == 'Personal') {
        category_box_texts[i].innerText += '  👼🏻';
    } else if (category_box_texts[i].innerText == 'Work') {
        category_box_texts[i].innerText += '  💻';
    } else if (category_box_texts[i].innerText == 'School') {
        category_box_texts[i].innerText += '  📓';
    } else if (category_box_texts[i].innerText == 'Cleaning') {
        category_box_texts[i].innerText += '  🧹';
    } else if (category_box_texts[i].innerText == 'Other') {
        category_box_texts[i].innerText += '   🤷‍♂️';
    }
}

// handling the tasks which have no deadlines
var date_values = document.querySelectorAll("#task-date-value");
for (let i = 0; i < date_values.length; i++) {
    if (date_values[i].innerText == '') {
        date_values[i].innerText = ' No Deadline';
    }
}

// handling the tasks with category 'other'
for (i = 0; i < category_boxes.length; i++) {
    if (category_boxes[i].innerText == 'Other') {
        category_boxes[i].style.display = 'none';
    }
}



