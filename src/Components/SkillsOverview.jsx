import React from 'react';

const SkillsOverview = () => {
    const languages = [
        { name: 'English', flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg', level: 70 },
        { name: 'Urdu', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/800px-Flag_of_Pakistan.svg.png', level: 90 },
        { name: 'Hindi', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png', level: 80 }
    ];

    const softSkills = [
        "Attention to Detail",
        "Cross-Functional Collaboration",
        "Time Management",
        "Critical Thinking",
        "Clear Communication",
        "Problem-Solving",
        "User-Centered Thinking",
        "Adaptability to New Tools & Trends",
        "Feedback Responsiveness",
    ];

    return (
        <div className="w-full px-4 sm:px-6 md:px-10">
            <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-14 mt-16 md:mt-20">
                
                {/* Languages Section */}
                <div className="flex-1">
                    <div className="flex items-center w-fit mb-6 border border-[#333333] rounded-4xl text-white px-4 py-2 tracking-widest gap-2 text-sm font-light font-play">
                        <i className="fa-light fa-language"></i>
                        <span>LANGUAGES</span>
                    </div>
                    {languages.map((lang, index) => (
                        <div key={index} className="flex items-center gap-4 mb-6 flex-wrap">
                            <div className='w-[55px] h-[55px] sm:w-[60px] sm:h-[60px] bg-[rgba(255,255,255,0.02)] rounded-2xl border border-[rgba(255,255,255,0.08)] p-2.5 sm:p-3'>
                                <img className="object-cover w-full h-full rounded" src={lang.flag} alt={lang.name} />
                            </div>
                            <div className='flex flex-col gap-1.5 w-full sm:w-auto'>
                                <span className="font-play text-light2 text-sm font-normal">{lang.name}</span>
                                <div className="flex items-center flex-wrap">
                                    {Array(10).fill().map((_, idx) => (
                                        <div
                                            key={idx}
                                            className="w-3.5 h-3.5 rounded-full mr-3 mb-2"
                                            style={{ backgroundColor: idx < lang.level / 10 ? '#77c643' : '#3f4149' }}
                                        ></div>
                                    ))}
                                    <span className="text-gray font-normal font-play text-sm ml-2">{lang.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills Section */}
                <div className="flex-1">
                    <div className="flex items-center w-fit mb-6 border border-[#333333] rounded-4xl text-white px-4 py-2 tracking-widest gap-2 text-sm font-light font-play">
                        <i className="fa-light fa-list-ul"></i>
                        <span>SOFT SKILLS</span>
                    </div>
                    {softSkills.map((skill, index) => (
                        <div key={index} className="flex items-center text-sm text-light2 font-normal mb-3 flex-wrap">
                            <span className="text-secondary font-bold mr-2">✓</span>
                            <span className="break-words">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsOverview;
