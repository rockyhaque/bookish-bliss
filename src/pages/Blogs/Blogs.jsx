const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className="text-center text-3xl font-bold mt-20">Welcome To My Book Blog</h1>
            </div>
            <div className="collapse collapse-plus bg-base-200 mt-20 mb-4">
                <input type="radio" name="my-accordion-3" defaultChecked /> 
                <div className="collapse-title text-lg font-bold">
                    The Importance of Reading Fiction
                </div>
                <div className="collapse-content"> 
                    <p className="mt-10">
                        <span className="text-md font-bold">Introduction: 📚</span>
                        Reading fiction is not just a pastime; it&apos;s a window into different worlds and experiences. It can expand your imagination, improve empathy, and provide a mental escape. Let&apos;s delve into the importance of reading fiction. 📖<br /><br />
                        1. Expanding Imagination 🌟<br />
                        Fiction allows readers to explore fantastical worlds and scenarios that are beyond the realm of reality. This expansion of imagination can inspire creativity in various aspects of life.<br /><br />
                        2. Enhancing Empathy 💖<br />
                        By immersing oneself in the lives of characters, readers can gain a deeper understanding of different perspectives and emotions, fostering empathy and compassion.<br /><br />
                        3. Mental Escape 🌍<br />
                        Fiction provides a mental escape from the stresses of daily life, offering a chance to unwind and relax while diving into a captivating story.<br /><br />
                        When to Read Fiction: 🕰️<br /><br />
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-lg font-bold">
                    How to Choose Your Next Book
                </div>
                <div className="collapse-content"> 
                    <p> 
                        Choosing your next book can be a delightful challenge. Here are some tips to help you select a book that you&apos;ll love:<br /><br />
                        1. Consider Your Interests 🎯<br />
                        Think about genres or topics that fascinate you. Whether it&apos;s mystery, romance, science fiction, or history, there&apos;s a book out there for you.<br /><br />
                        2. Read Reviews and Recommendations 🌟<br />
                        Look up reviews from trusted sources or get recommendations from friends and family. Online communities and book clubs can also provide valuable suggestions.<br /><br />
                        3. Browse Bookstores and Libraries 📚<br />
                        Spend time browsing physical or online bookstores and libraries. Sometimes, a book&apos;s cover, title, or blurb can catch your eye and pique your interest.<br /><br />
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-lg font-bold">
                    Benefits of Joining a Book Club
                </div>
                <div className="collapse-content"> 
                    <p>
                        Joining a book club can enhance your reading experience in numerous ways. Here are some benefits:<br /><br />
                        1. Social Interaction 🤝<br />
                        Book clubs provide a platform to meet new people and engage in stimulating discussions about books and related topics.<br /><br />
                        2. Diverse Perspectives 🌍<br />
                        Listening to different viewpoints can enrich your understanding of a book and introduce you to new interpretations and ideas.<br /><br />
                        3. Accountability and Motivation 🏆<br />
                        Book clubs can motivate you to read more regularly and explore books you might not have picked up otherwise.<br /><br />
                        Why Join a Book Club? 📖<br /><br />
                        Book clubs are more than just about reading; they are about building a community of like-minded individuals who share a passion for books.<br /><br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
