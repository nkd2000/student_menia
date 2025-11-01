// JavaScript code for the Student Exam Preparation Project

// Function to initialize the application
function initApp() {
    console.log("Student Exam Preparation App Initialized");
    loadSubjects();
}

// Function to load subjects dynamically
function loadSubjects() {
    const subjectsContainer = document.getElementById('subjects-container');
    const subjects = [
        { class: '6', subjects: ['Math', 'Science', 'English', 'Social Studies'] },
        { class: '7', subjects: ['Math', 'Science', 'English', 'Social Studies'] },
        { class: '8', subjects: ['Math', 'Science', 'English', 'Social Studies'] },
        { class: '9', subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'English'] },
        { class: '10', subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'English'] },
        { class: '11', subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'English'] },
        { class: '12', subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'English'] },
    ];

    subjects.forEach(item => {
        const classDiv = document.createElement('div');
        classDiv.className = 'class';
        classDiv.innerHTML = `<h3>Class ${item.class}</h3>`;
        
        item.subjects.forEach(subject => {
            const subjectLink = document.createElement('a');
            subjectLink.href = `subjects/class-${item.class}/${subject.toLowerCase().replace(' ', '-')}.html`;
            subjectLink.innerText = subject;
            subjectLink.className = 'subject-link';
            classDiv.appendChild(subjectLink);
        });

        subjectsContainer.appendChild(classDiv);
    });
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', initApp);