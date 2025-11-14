# CV Website Development Brief
## Project Overview

**Project Name:** Professional CV Website for Konstantinos Rekalidis  
**Client:** Konstantinos Rekalidis  
**Project Type:** Personal Branding Website  
**Target Audience:** Industry peers and recruiters  
**Brand Positioning:** Modern, tech-savvy, minimalist, and clean

---

## 1. Project Goals & Objectives

### Primary Goals
1. Establish a strong online professional presence
2. Showcase professional experience and expertise in digital analytics and software development
3. Provide an accessible, professional platform for recruiters and industry peers to learn about Konstantinos's background

### Success Criteria
- Professional presentation of work experience (TOP PRIORITY)
- Fully responsive design across all devices (TOP PRIORITY)
- Clean, minimalist aesthetic that reflects modern tech-savvy branding
- Fast loading times and excellent user experience
- WCAG 2.0 Level AA accessibility compliance
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

---

## 2. Technical Specifications

### Technology Stack
- **Frontend:** Plain HTML5, CSS3, JavaScript (Vanilla JS)
- **Architecture:** Multi-page website
- **Hosting:** Netlify (free tier)
- **Deployment:** Netlify subdomain (krekalidis.netlify.app or similar)
- **Forms:** Netlify Forms (native integration)
- **Analytics:** Google Analytics 4
- **Version Control:** Git (for Netlify deployment)

### Browser Compatibility
- Google Chrome (latest 2 versions)
- Mozilla Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Microsoft Edge (latest 2 versions)

### Performance Requirements
- Mobile-first responsive design (desktop priority for layout)
- Optimized images and assets
- Minimal external dependencies
- Fast page load times (<3 seconds on average connection)

---

## 3. Website Structure & Pages

### Page Architecture (Multi-page)

#### 3.1 Home Page (index.html)
- Hero section with professional photo (placeholder) and tagline
- Brief introduction (2-3 sentences from "About" section)
- Quick links to main sections
- Call-to-action buttons (Download CV, Contact Me)

#### 3.2 About Page (about.html)
- Full professional summary
- Professional philosophy/approach
- Key competencies overview
- Profile image

**Content:**
```
Seasoned software development engineer with a strong background in analytics and digital solutions. Currently, I lead enterprise-scale digital analytics projects, leveraging tools like Adobe Analytics, Google Analytics, and Tealium iQ. My role encompasses strategic engineering, precise data collection, and mentorship of digital analytics developers. Previously, I contributed to high-impact projects in telecom and the energy sector, including designing data warehouses, reporting tools, and decision-support applications. My expertise spans full-stack development, data integration, and leadership in cross-functional teams. Skilled in JavaScript, Oracle PL/SQL, and modern frameworks, I focus on delivering impactful solutions for complex challenges.
```

#### 3.3 Experience Page (experience.html)
**THIS IS THE HIGHEST PRIORITY PAGE - MUST BE PROFESSIONALLY PRESENTED**

Display all 6 work experiences in reverse chronological order:

**1. Senior Digital Analytics Specialist**
- Company: Baresquare
- Duration: Jan 2020 - Present (5 yrs 11 mos)
- Location: Salonica, Central Macedonia, Greece · Hybrid
- Type: Full-time
- Responsibilities:
  - Providing consultancy services to clients and implementing solutions across various areas such as Digital Analytics, Consent Management, AdTech Platforms, A/B testing, and Customer Surveys
  - Overseeing extensive analytics projects for enterprise-level clients utilizing tools like Adobe Analytics, Google Analytics, and Tealium iQ
  - Assisting global marketing teams with digital campaigns and data collection initiatives to ensure the precision and reliability of data
  - Taking charge of leadership and mentorship responsibilities for a team of two digital analytics developers
- Skills: JavaScript, Adobe Analytics, Adobe Target, Tealium iQ, Google Tag Manager

**2. Associate IT Specialist**
- Company: IBM Global Services
- Duration: Jul 2007 - Jan 2020 (12 yrs 7 mos)
- Location: Athens, Greece
- Type: Full-time
- Account: Vodafone Greece Account
- Responsibilities:
  - Design and development of a reporting web portal for network performance statistics regarding radio network, core network and VAS (Value Added Services), which is a key business tool for significant number of the Vodafone Greece employees from various divisions
  - Implementation of a web application for the configuration of the Vodafone Greece network
  - Drive, coordinate and mentor the offshore global delivery team, located in Bangalore India, in order to design, build and deliver quality medium scale projects in the BI applications used from our clients
  - Responsible for 24/7 second level support for Business Intelligence applications
- Technologies: ASP.NET Web forms (C# and VB.NET), CSS, JavaScript, Oracle PL/SQL, UNIX shell script
- Skills: C#, SQL, ASP.NET Web Forms, VB.NET, Cascading Style Sheets (CSS), UNIX Shell Script, Oracle Application Express, PL/SQL

**3. Software Architect**
- Company: THE ROPE EFFECT LTD
- Duration: Feb 2009 - Jan 2015 (6 yrs)
- Location: Southampton, United Kingdom
- Project: Teretron (Structural Timber Design software to Eurocode 5)
- Responsibilities:
  - Implementation of scientific algorithms
  - UI design and development
  - Database handling
  - Technical reporting
  - Liaising with structural engineers
- Technologies: Java Standard Edition
- Skills: Java, Git, Apache Ant

**4. Software Engineer**
- Company: Vodafone Greece
- Duration: Feb 2007 - Jul 2007 (6 mos)
- Location: Athens, Greece
- Type: Full-time
- Responsibilities:
  - Design and development of telecom applications on ASP.NET (VB.NET), Oracle PL/SQL and UNIX shell script
  - Support of 4 existing applications of the engineering department of the Vodafone Greece during office hours
- Note: After the global IT outsourcing deal between Vodafone and IBM, moved to IBM
- Skills: C#, SQL

**5. Application Developer**
- Company: ITS SA
- Duration: Sep 2005 - Jan 2007 (1 yr 5 mos)
- Location: Thessaloniki, Greece
- Type: Full-time
- Description: .NET Software developer involved in the design and implementation of both of the company's flagship products, successful in the retail SME market
- Projects:
  - Mobile@Warehouse suite: mobile application for warehouse management and desktop tools for integration with client's software infrastructure (database bridge and automatic data loader)
  - Mobile@Sales suite: sales management mobile application and desktop tools for communication with client's database (GPRS database synchronizer)
- Technologies: .NET WinForms with C#, SQL Server, .NET Compact Framework, SQL Server Compact for mobile applications
- Skills: C#, SQL, Microsoft SQL Server

**6. Application Developer**
- Company: IQS S.A
- Duration: Jan 2004 - Sep 2004 (9 mos)
- Location: Thessaloniki, Greece
- Type: Full-time
- Description: Java developer working on the windows application edition of EUtrek.com, an advanced stock exchange analysis and monitoring tool
- Responsibilities:
  - Played a key role in the redesign of the application
  - Contributed to the implementation of the business logic layer (web services in Oracle)

#### 3.4 Education Page (education.html)

**Master of Science (MSc)**
- Institution: University of Surrey
- Field: Communication Networks & Software
- Duration: 2004 – 2005
- Achievement: Graduated with Distinction
- Dissertation: Development of Distributed Application for Smart Phones by using Bluetooth Technology

**Bachelor of Science (BSc)**
- Institution: University of Piraeus
- Field: Computer Science
- Duration: 1997 – 2001
- Diploma Thesis: "Radiosity based 3D Engine" - Development of 3D Graphics Rendering Engine by using Java 2 Standard Edition and Java 3D API

#### 3.5 Skills Page (skills.html)

Organize skills into categories:

**Digital Analytics & Marketing Technology**
- Adobe Analytics
- Google Analytics
- Tealium iQ
- Google Tag Manager
- Adobe Target

**Programming Languages**
- JavaScript
- C#
- Java
- SQL (Oracle PL/SQL, Microsoft SQL Server, MySQL)
- VB.NET

**Web Technologies**
- ASP.NET / ASP.NET Web Forms
- HTML/CSS
- XML

**Development Tools & Practices**
- Git
- Apache Ant
- Visual Studio
- Software Design
- Software Development
- Software Engineering

**Databases**
- Oracle
- Microsoft SQL Server
- MySQL
- Database Design
- Oracle Application Express

**Other Technical Skills**
- UNIX Shell Script
- Linux
- Shell Scripting
- Mobile Applications
- Web Applications
- .NET Framework
- UML
- Business Analysis
- Requirements Analysis

**Soft Skills**
- Leadership & Mentorship
- Project Management
- Cross-functional Team Collaboration
- Public Speaking (Toastmasters)

**Languages**
- Greek: Native or bilingual proficiency
- English: Professional working proficiency

#### 3.6 Certifications Page (certifications.html)

**Active Certifications:**
- IBM Carbon Design System Developer Essentials (IBM, Jul 2019)
- Big Data Foundations - Level 1 (IBM, Jul 2018)
- IBM Agile Explorer (IBM, Jun 2018)
- IBM Design Thinking Practitioner (IBM, Sep 2017)

**Expired Certifications (for reference):**
- Certified SAFe® 4 Agilist (Scaled Agile, Inc., Aug 2019 - Aug 2020)

**Completed Courses:**
- Developing Agile High Performance Teams (IBM Global Services)
- Developing Web Applications with Microsoft Visual Studio 2010 (IBM Global Services)

#### 3.7 Projects Page (projects.html)
**Note: This page should have placeholder content for future use**

**Existing Project (can be featured):**

**Student Card Redesign for WCAG Compliance**
- Timeline: Jan 2012 – Mar 2012
- Description: A web portal helping students apply for an academic identity card, redesigned to follow new web standards and WCAG 2.0 Level AA. HTML markup was refactored for reinforcing semantics. Introduced keyboard navigation, images' description, video tutorial alternatives, and other accessibility features to make content available to people with disabilities.
- Technologies: C#

**Teretron (Associated with THE ROPE EFFECT LTD)**
- Description: Software application for Structural Timber Design to Eurocode 5
- Technologies: Java Standard Edition

**Placeholder Section:**
Add a section stating: "More projects coming soon. Check back for updates on my latest work."

#### 3.8 Contact Page (contact.html)
- Contact form using Netlify Forms
- Professional email address (if available)
- LinkedIn profile link: www.linkedin.com/in/krekalidis
- Location: Thessaloniki, Greece
- Optional: GitHub profile (if applicable)

**Form Fields:**
- Name (required)
- Email (required)
- Subject (optional)
- Message (required, textarea)
- Submit button

**Netlify Form Configuration:**
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- form fields -->
</form>
```

---

## 4. Design Specifications

### Design Principles
- Modern and tech-savvy aesthetic
- Minimalist and clean layout
- Professional presentation
- Focus on content hierarchy
- Excellent readability

### Color Scheme
- **Primary Colors:** Shades of cyan or blue
- **Avoid:** Gradients
- **Acceptable:** Solid colors, subtle variations in shade
- **Background:** White or very light gray
- **Text:** Dark gray or black for readability
- **Accents:** Cyan/blue for links, buttons, and highlights

**Suggested Palette:**
- Primary: #0891B2 (Cyan-600)
- Secondary: #0E7490 (Cyan-700)
- Accent: #06B6D4 (Cyan-500)
- Background: #FFFFFF (White)
- Secondary Background: #F8FAFC (Slate-50)
- Text: #1E293B (Slate-800)
- Secondary Text: #64748B (Slate-500)

### Typography
- Modern, professional sans-serif fonts
- Suggested: System fonts (Inter, Segoe UI, Roboto, Arial)
- Clear hierarchy (H1, H2, H3, body text)
- Readable font sizes (minimum 16px for body text)
- Appropriate line height (1.5-1.8 for body text)

### Layout
- Single or two-column layout (flexible based on content)
- Generous white space
- Clear visual hierarchy
- Card-based components for experience and education entries
- Responsive grid system

### Interactive Elements
- Hover effects on links and buttons (subtle transitions)
- Interactive navigation menu
- Smooth scrolling (if applicable)
- Form validation feedback
- **NO animations unless for sliders/carousels**
- Focus states for accessibility

### Inspiration References
- https://www.hanselman.com/ - Professional, clean, content-focused
- https://www.simoahava.com/ - Technical blog aesthetic, good typography

---

## 5. Functional Requirements

### 5.1 Navigation
- Fixed or sticky navigation bar
- Clear menu structure
- Active page indicator
- Mobile hamburger menu for responsive design
- Smooth transitions

### 5.2 PDF CV Download
- Prominent "Download CV" button on multiple pages
- Pre-prepared PDF file (client will provide)
- File naming: `Konstantinos_Rekalidis_CV.pdf`
- Downloadable via link: `<a href="assets/Konstantinos_Rekalidis_CV.pdf" download>`

### 5.3 Contact Form (Netlify Forms)
- Form validation (client-side and Netlify's server-side)
- Success message after submission
- Error handling
- Spam protection (Netlify's built-in honeypot)
- Email notifications to client

**Implementation Requirements:**
```html
<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <p class="hidden">
    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <!-- rest of form -->
</form>
```

### 5.4 Google Analytics 4
- GA4 tracking code in all pages
- Page view tracking
- Event tracking for:
  - PDF download clicks
  - Contact form submissions
  - External link clicks (LinkedIn, etc.)
- Privacy-compliant implementation

**Note:** Client will provide GA4 Measurement ID

### 5.5 Responsive Design
- **Desktop-first approach** with mobile optimization
- Breakpoints:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px and above
- Touch-friendly buttons and links on mobile (minimum 44x44px tap targets)
- Responsive images
- Flexible grid layouts

### 5.6 Accessibility (WCAG 2.0 Level AA)
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for all images
- Sufficient color contrast ratios (minimum 4.5:1 for normal text)
- Keyboard navigation support
- Focus indicators
- ARIA labels where appropriate
- Screen reader friendly
- Form labels and error messages

---

## 6. Content Requirements

### Images Required
1. Professional headshot/profile photo (placeholder: use generic avatar)
2. Company logos (optional, can be omitted initially)
3. Favicon (can use initials "KR")

### Documents Required
1. PDF CV (pre-prepared by client) - filename: `Konstantinos_Rekalidis_CV.pdf`

### Text Content
All content has been provided above in respective page sections. Content should be easily editable by modifying HTML files directly.

---

## 7. File Structure

```
/
├── index.html              # Home page
├── about.html              # About page
├── experience.html         # Work experience page (PRIORITY)
├── education.html          # Education page
├── skills.html             # Skills page
├── certifications.html     # Certifications page
├── projects.html           # Projects page (with placeholders)
├── contact.html            # Contact page
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # Main JavaScript file
│   ├── images/
│   │   └── (placeholder images)
│   └── pdf/
│       └── Konstantinos_Rekalidis_CV.pdf
├── favicon.ico
└── README.md               # Deployment instructions
```

---

## 8. Deployment Instructions

### Prerequisites
1. Node.js and npm installed
2. Netlify CLI installed: `npm install -g netlify-cli`
3. Netlify account created (free tier)

### Deployment Steps

#### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: CV website"
```

#### Step 2: Login to Netlify
```bash
netlify login
```
This will open a browser window for authentication.

#### Step 3: Initialize Netlify Site
```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Team: Select your team
- Site name: `krekalidis` (or preferred name)
- Build command: (leave empty - static site)
- Publish directory: `.` (root directory)

#### Step 4: Deploy
```bash
netlify deploy --prod
```

#### Step 5: Configure Netlify Forms
Forms are automatically configured via the `data-netlify="true"` attribute. After first deployment:
1. Go to Netlify Dashboard → Site Settings → Forms
2. Set up email notifications
3. Configure spam filtering if needed

#### Step 6: Configure Custom Domain (Optional)
If client wants a custom domain later:
```bash
netlify domains:add yourdomain.com
```

### Continuous Deployment
For future updates:
```bash
git add .
git commit -m "Update content"
git push
netlify deploy --prod
```

Or connect the Git repository to Netlify for automatic deployments on push.

---

## 9. Testing Requirements

### Cross-Browser Testing
Test on:
- Chrome (Windows & macOS)
- Firefox (Windows & macOS)
- Safari (macOS & iOS)
- Edge (Windows)

### Responsive Testing
Test on:
- Mobile devices (320px, 375px, 414px widths)
- Tablets (768px, 1024px widths)
- Desktop (1280px, 1440px, 1920px widths)

### Accessibility Testing
- Use WAVE browser extension
- Test keyboard navigation
- Verify color contrast with accessibility tools
- Test with screen reader (NVDA or JAWS)

### Performance Testing
- Google PageSpeed Insights
- GTmetrix
- Lighthouse audit (aim for 90+ scores)

### Functionality Testing
- All navigation links work
- PDF download functions correctly
- Contact form submits successfully
- External links open in new tabs
- GA4 tracking fires correctly

---

## 10. Maintenance & Content Updates

### Content Update Process
Since the client is comfortable editing HTML/code:
1. Edit the respective HTML file
2. Update content directly in HTML
3. Save changes
4. Deploy via `netlify deploy --prod`

### Future Enhancements (Out of Scope for Initial Build)
- Blog section
- Dark mode toggle
- Multi-language support
- Dynamic project showcases
- Testimonials section

---

## 11. Success Metrics

### Launch Criteria
- [ ] All pages created and content populated
- [ ] Responsive design working on all breakpoints
- [ ] Cross-browser compatibility verified
- [ ] WCAG 2.0 Level AA compliance achieved
- [ ] Contact form functional and tested
- [ ] PDF download working
- [ ] GA4 tracking implemented
- [ ] Deployed to Netlify
- [ ] Professional presentation of work experience achieved

### Post-Launch Monitoring
- Monitor GA4 analytics for visitor behavior
- Track contact form submissions
- Monitor page load performance
- Gather feedback from recruiters/peers

---

## 12. Project Constraints

- **Budget:** Free hosting only (Netlify free tier)
- **Timeline:** To be determined
- **Content Updates:** Infrequent - client will update HTML manually
- **No Backend:** Fully static site, no server-side processing except Netlify Forms
- **No Database:** All content hardcoded in HTML

---

## 13. Deliverables

1. Complete multi-page website (8 HTML pages)
2. CSS stylesheet with responsive design
3. JavaScript file for interactions
4. README.md with deployment instructions
5. Netlify configuration
6. GA4 implementation
7. Accessible, WCAG 2.0 Level AA compliant code
8. Cross-browser tested and validated

---

## 14. Notes for Development

- **Priority 1:** Professional presentation of work experience page
- **Priority 2:** Responsive design across all devices
- **Priority 3:** Clean, minimalist aesthetic
- The experience page is the most important - give it special attention to layout and visual hierarchy
- Client prefers solid colors over gradients
- Keep animations minimal - only for essential UI elements
- Ensure easy content editability (client will edit HTML directly)
- Focus on accessibility - this is a requirement, not optional
- Projects page should be built but with placeholder content
- All external links (LinkedIn, credentials) should open in new tabs

---

## 15. Contact Information

**Client:** Konstantinos Rekalidis  
**LinkedIn:** www.linkedin.com/in/krekalidis  
**Location:** Thessaloniki, Greece

---

**Document Version:** 1.0  
**Last Updated:** November 13, 2025  
**Prepared For:** Gemini CLI Autonomous Development