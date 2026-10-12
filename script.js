// Dynamic Data Definitions with original Devicon classes for professional branding
const technicalSkills = [
    { 
        category: "Languages", 
        items: [
            { name: "Python", icon: "devicon-python-plain colored" }, 
            { name: "JavaScript", icon: "devicon-javascript-plain colored" }, 
            { name: "Java", icon: "devicon-java-plain colored" }, 
            { name: "C/C++", icon: "devicon-cplusplus-plain colored" }
        ] 
    },
    { 
        category: "Frameworks", 
        items: [
            { name: "Node.js", icon: "devicon-nodejs-plain colored" }, 
            { name: "React.js", icon: "devicon-react-original colored" }, 
            { name: "Express", icon: "devicon-express-original text-white dark:text-white light:text-slate-900" }, // Express doesn't have a distinct native color, matches text theme
            { name: "Flask", icon: "devicon-flask-original text-white dark:text-white light:text-slate-900" },
            { name: "Vite", icon: "devicon-vite-original colored" }
            , 
            { name: "TensorFlow", icon: "devicon-tensorflow-original colored" }
        ] 
    },
    {
    category: "AI & Intelligent Systems",
    items: [
        { name: "AI Agents", icon: "" },
        { name: "Machine Learning", icon: "" },
        { name: "Computer Vision", icon: "" }
    ]
    },
    { 
        category: "Core Protocols & Engineering", 
        items: [
            { name: "REST APIs", icon: "" }, // Left blank intentionally as requested (Core engineering values only)
            { name: "JWT Auth", icon: "" }, 
            { name: "Socket.IO Architecture", icon: "" }, 
            { name: "RBAC Routing", icon: "" }
        ] 
    },
    { 
        category: "Database", 
        items: [
            { name: "MongoDB", icon: "devicon-mongodb-plain colored" }, 
            { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }, 
            { name: "MySQL", icon: "devicon-mysql-original colored" }
        ] 
    }
];

const engineeredProjects = [
    {
        title: "Tenderwin.ai",
        badge: "Backend & Performance Engineering",
        description: "Tenderwin.ai is an AI-powered platform that helps businesses discover, track, and analyze tender opportunities through automated data processing and intelligent insights.",
        highlights: [
            "Reduced API response time from 17s to 1s through SQL query optimization and strategic database indexing.",
            "Designed and developed scalable REST APIs and backend services for high-volume tender data processing.",
            "Refactored complex database queries and optimized data retrieval workflows to improve system efficiency.",
            "Built and optimized data crawling pipelines capable of processing lakhs of records with high reliability.",
            "Conducted end-to-end API testing, performance benchmarking, and backend optimization for Tenderwin.ai."
        ],
        tags: ["Python", "MongoDB", "REST APIs", "Web Crawling", "Performance Tuning"],
        githubUrl: "https://tenderwin.ai/"
    },
    {
        title: "Memory Lane (SnapshotAI)",
        badge: "IIIT Nagpur Hackathon Project",
        description: "SnapshotAI is an AI-powered Chrome extension that captures web activity, summarizes content, and organizes browsing history into searchable knowledge snapshots for faster research and information retrieval.",
        highlights: [
            "Developed a Chrome extension capturing URLs, screenshots, and browsing context, storing structured snapshots via a Node.js + Express API with MongoDB.",
            "Engineered a Python Flask NLP microservice using DistilBERT/BART Transformers for contextual automated summaries.",
            "Designed a searchable web dashboard with filtering and automated categorization, improving content retrieval speed by ~60% and reducing manual organization effort by ~70%.",
            "Implemented async auto-save workflows and PDF export generation, enhancing research productivity and structured content reporting."
        ],
        tags: ["Node.js", "React.js", "Transformers", "Flask", "Chrome Extensions"],
        githubUrl: "https://github.com/saad-sheikh-dev/Memory-Lane-Chrome-Extension"
    },
    {
        title: "Tours & Travel Website",
        badge: "Production Architecture Work",
        description: "An enterprise grade full-stack reservations web application driving optimized data fetching layouts alongside atomic processing streams.",
        highlights: [
            "Implemented end-to-end multi-tier RBAC parameters backed completely by encrypted state payload validation cookies (JWT).",
            "Configured live chat infrastructure routing via fully optimized Socket.IO connections delivering sub-300ms network transactions."
        ],
        tags: ["React.js","Node.js","Express", "MongoDB", "Razorpay API", "Socket.IO"],
        githubUrl: "https://github.com/saad-sheikh-dev/nexus_frontend"
    }
];

// Initialize DOM Components on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    renderSkillsGrid();
    renderProjectsGrid();
    setupScrollReveal();
    setupFormValidation();
    
    // Inject Lucide Icon elements automatically after DOM is fully constructed
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Programmatic construction of skill modules with individual zoom animations on hover
function renderSkillsGrid() {
    const contextContainer = document.getElementById("skills-grid");
    if (!contextContainer) return;

    contextContainer.innerHTML = technicalSkills.map(group => `
        <div class="p-6 rounded-xl border border-gray-800/40 dark:border-gray-800/40 light:border-gray-200 bg-[#0e1424]/30 dark:bg-[#0e1424]/30 light:bg-white/60 backdrop-blur-sm transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.015] hover:border-teal-500/40 light:hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/5">
            <h3 class="text-sm font-bold tracking-wider text-teal-500 dark:text-teal-400 light:text-teal-600 uppercase mb-4">${group.category}</h3>
            <div class="flex flex-wrap gap-2.5">
                ${group.items.map(item => `
                    <span class="inline-flex items-center px-3.5 py-2 text-xs font-bold bg-slate-900/80 dark:bg-slate-900/80 light:bg-gray-200/90 border border-gray-800/70 dark:border-gray-800/70 light:border-gray-300 text-gray-200 dark:text-gray-200 light:text-gray-800 rounded-md cursor-default transform transition-all duration-200 ease-out hover:scale-110 hover:border-teal-500/50 light:hover:border-teal-500/60 hover:text-white dark:hover:text-white light:hover:text-teal-600 hover:shadow-md hover:shadow-teal-500/10">
                        ${item.icon ? `<i class="${item.icon} text-base font-bold mr-2 shrink-0"></i>` : ''}
                        <span>${item.name}</span>
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Programmatic rendering of projects with uniform external link icons across all action buttons
function renderProjectsGrid() {
    const gridContainer = document.getElementById("projects-grid");
    if (!gridContainer) return;

    gridContainer.innerHTML = engineeredProjects.map(project => {
        // Dynamically assign button text, but keep the icon uniform ('external-link') for both
        const isTenderwin = project.title.toLowerCase().includes("tenderwin");
        const buttonText = isTenderwin ? "View Website" : "View Repository";
        const iconName = "external-link"; // Both buttons now use the exact same external link arrow logo

        return `
            <div class="project-card reveal opacity-0 transform translate-y-8 flex flex-col p-6 rounded-xl border border-gray-800/40 dark:border-gray-800/40 light:border-gray-200/80 bg-[#0e1424]/60 dark:bg-[#0e1424]/60 light:bg-white/70 backdrop-blur-sm relative overflow-hidden group transition-all duration-300">
                <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div>
                    <div class="mb-4">
                        <span class="inline-block px-2.5 py-0.5 text-[10px] font-bold text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-500/10 border border-teal-500/20 dark:border-teal-500/20 light:border-teal-500/30 rounded uppercase tracking-wider mb-3">${project.badge}</span>
                        <h3 class="text-2xl font-extrabold tracking-tight text-white dark:text-white light:text-gray-900 group-hover:text-teal-400 dark:group-hover:text-teal-400 light:group-hover:text-teal-600 transition-colors duration-300">${project.title}</h3>
                    </div>
                    <p class="text-[15px] text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-4 font-normal">${project.description}</p>
                    
                    <ul class="text-[13px] text-gray-200 dark:text-gray-200 light:text-gray-800 space-y-2.5 list-none mb-6 font-semibold">
                        ${project.highlights.map(h => `
                            <li class="flex items-start gap-2">
                                <span class="text-teal-400 dark:text-teal-400 light:text-teal-600 font-bold shrink-0">▹</span>
                                <span class="tracking-wide">${h}</span>
                            </li>
                        `).join('')}
                    </ul>
                    
                    <div class="flex flex-wrap gap-1.5 mb-6">
                        ${project.tags.map(t => `
                            <span class="px-2 py-1 text-[11px] bg-slate-900/40 dark:bg-slate-900/40 light:bg-gray-100 border border-gray-800/40 dark:border-gray-800/40 light:border-gray-200 text-gray-400 dark:text-gray-400 light:text-gray-600 rounded transition-colors duration-300">${t}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="mt-auto pt-2">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-teal-400 via-cyan-400 to-fuchsia-400 rounded-lg shadow-md shadow-teal-500/10 hover:opacity-90 transition-all duration-300">
                        <i data-lucide="${iconName}" class="w-4 h-4"></i> ${buttonText}
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

// Accelerated Scroll Observers with optimized threshold properties for instant display activations
function setupScrollReveal() {
    const revealTargets = document.querySelectorAll(".reveal");
    
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                window.requestAnimationFrame(() => {
                    entry.target.classList.remove("opacity-0", "translate-y-8");
                    entry.target.classList.add("opacity-100", "translate-y-0");
                });
                intersectionObserver.unobserve(entry.target); // Save hardware CPU rendering pipeline
            }
        });
    }, { threshold: 0.02 }); // Trigger layout reveals noticeably quicker

    revealTargets.forEach(target => intersectionObserver.observe(target));
    
    // Explicitly wake hero assets instantly
    setTimeout(() => {
        const heroNode = document.querySelector("#about .reveal");
        if(heroNode) {
            heroNode.classList.remove("opacity-0", "translate-y-8");
            heroNode.classList.add("opacity-100", "translate-y-0");
        }
    }, 150);
}

// Production-grade Web3Forms Handler Integration with Dynamic Toast Stack Engine
function setupFormValidation() {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Target submission button to inject localized loading states
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton ? submitButton.innerHTML : "Send Message";
        
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = "Sending Message...";
        }

        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                showToast("Success! Your message was sent securely.", "success");
                contactForm.reset();
            } else {
                showToast(`Transmission failed: ${result.message}`, "error");
            }
        } catch (error) {
            console.error("Infrastructure Error:", error);
            showToast("Network timeout. Please check your connectivity limits.", "error");
        } finally {
            // Restore button interactivity state pipelines
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        }
    });
}

// Programmatic Custom Toast Constructor UI Element
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    // Create toast wrapper
    const toast = document.createElement("div");
    
    // Choose colors based on submission outcome status
    const isSuccess = type === "success";
    const accentColor = isSuccess ? "from-teal-500 to-emerald-500 text-teal-400" : "from-rose-500 to-red-600 text-rose-400";
    const iconName = isSuccess ? "check-circle" : "alert-circle";

    // Set base container styles with Tailwind utilities
    toast.className = `transform translate-x-full opacity-0 transition-all duration-300 ease-out pointer-events-auto flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-800 bg-[#0e1424]/90 backdrop-blur-md shadow-2xl shadow-black/40 text-sm text-gray-200 min-w-[300px] max-w-sm relative overflow-hidden`;
    
    // Construct element inner node skeleton layout
    toast.innerHTML = `
        <div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b ${accentColor}"></div>
        <i data-lucide="${iconName}" class="w-5 h-5 shrink-0 ${isSuccess ? 'text-teal-400' : 'text-rose-400'}"></i>
        <div class="font-medium tracking-wide leading-relaxed">${message}</div>
    `;

    // Append to virtual workspace layout tree
    container.appendChild(toast);

    // Re-initialize lucide vector graphics for dynamically added icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons({
            attrs: {
                class: 'lucide'
            }
        });
    }

    // Force reflow layout step and push toast into full view frame
    requestAnimationFrame(() => {
        toast.classList.remove("translate-x-full", "opacity-0");
    });

    // Automatically trigger disposal sequence after 4 seconds
    setTimeout(() => {
        toast.classList.add("translate-x-full", "opacity-0");
        toast.addEventListener("transitionend", () => {
            toast.remove();
        });
    }, 4000);
}


/* Back-to-Top button: positioning + animated arrow */
(function () {
    const backToTopButton = document.getElementById("back-to-top");

    if (!backToTopButton) return;

    // Position the button 55px above the bottom-right edge.
    backToTopButton.style.position = "fixed";
    backToTopButton.style.right = "24px";
    backToTopButton.style.setProperty("bottom", "55px", "important");
    backToTopButton.style.zIndex = "99999";

    // Add the arrow animation once.
    if (!document.getElementById("back-to-top-animation-style")) {
        const style = document.createElement("style");
        style.id = "back-to-top-animation-style";
        style.textContent = `
            @keyframes backToTopArrowUp {
                0%   { transform: translateY(10px); opacity: 0.3; }
                60%  { transform: translateY(-5px); opacity: 1; }
                100% { transform: translateY(0); opacity: 1; }
            }

            #back-to-top .back-to-top-arrow-animated {
                display: inline-block;
                animation: backToTopArrowUp 0.65s ease-out both;
            }

            @media (prefers-reduced-motion: reduce) {
                #back-to-top .back-to-top-arrow-animated {
                    animation: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Find the arrow already inside the button.
    const arrow = backToTopButton.querySelector("span, i, svg");

    let wasVisible = false;

    function updateBackToTopButton() {
        const shouldShow = window.scrollY > 300;

        backToTopButton.classList.toggle("is-visible", shouldShow);

        // Set visibility directly so the button works even without CSS.
        backToTopButton.style.opacity = shouldShow ? "1" : "0";
        backToTopButton.style.visibility = shouldShow ? "visible" : "hidden";
        backToTopButton.style.pointerEvents = shouldShow ? "auto" : "none";

        if (shouldShow && !wasVisible && arrow) {
            arrow.classList.remove("back-to-top-arrow-animated");

            // Restart the arrow animation whenever the button appears.
            void arrow.offsetWidth;
            arrow.classList.add("back-to-top-arrow-animated");
        }

        if (!shouldShow && arrow) {
            arrow.classList.remove("back-to-top-arrow-animated");
        }

        wasVisible = shouldShow;
    }

    window.addEventListener("scroll", updateBackToTopButton, {
        passive: true
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    updateBackToTopButton();
})();