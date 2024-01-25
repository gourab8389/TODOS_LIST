import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
    return (
        <div className="about-container">
            <h2>This is Todos List</h2>
            <p>Welcome to <span className="project-name">[TODOS LIST]</span>, your ultimate companion for efficient task management and productivity! At <span className="project-name">[TODOS LIST]</span>, we believe in simplifying your life by providing a streamlined and intuitive to-do list experience.</p>

            <h3>Key Features:</h3>
            <ul>
                <li>Intuitive Interface: Our user-friendly interface ensures that managing your tasks is a breeze. With a clean design, you can focus on what matters most – your to-dos.</li>
                <li>Smart Organization: Categorize your tasks, set priorities, and utilize tags to organize your to-do list the way that suits your workflow. Stay in control and on top of your commitments.</li>
                <li>Collaboration Made Easy: Share tasks and collaborate with team members, friends, or family. Whether it's a work project or a shared grocery list, <span className="project-name">[TODOS LIST]</span> keeps everyone on the same page.</li>
                <li>Reminder System: Never miss a deadline again. Set reminders for important tasks, and <span className="project-name">[TODOS LIST]</span> will make sure you stay on track.</li>
                <li>Cross-Platform Sync: Access your to-do list anytime, anywhere. Our seamless synchronization across devices ensures your tasks are always at your fingertips.</li>
            </ul>

            <h3>Our Mission:</h3>
            <p>At <span className="project-name">[TODOS LIST]</span>, our mission is to empower individuals and teams to achieve more by providing a reliable and feature-rich to-do list solution. We understand the value of time and aim to make task management a stress-free and enjoyable experience.</p>

            <h3>Get Started:</h3>
            <p>Ready to take control of your tasks? Join <span className="project-name">[TODOS LIST]</span> today and experience a new level of productivity!</p>
        </div>
    );
}

export default About;

