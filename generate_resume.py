import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def generate_resume(output_path):
    # Page setup - 0.45 in margins for perfect single page fit
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()

    # Custom styles
    primary_color = colors.HexColor("#0f172a")     # Slate 900
    accent_color = colors.HexColor("#0284c7")      # Sky 600
    text_dark = colors.HexColor("#1e293b")         # Slate 800
    text_muted = colors.HexColor("#475569")        # Slate 600
    line_color = colors.HexColor("#cbd5e1")        # Slate 300

    title_style = ParagraphStyle(
        'DocTitle',
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=primary_color,
        alignment=1, # Center
        spaceAfter=3
    )

    contact_style = ParagraphStyle(
        'ContactLine',
        fontName='Helvetica',
        fontSize=9,
        leading=11,
        textColor=text_muted,
        alignment=1,
        spaceAfter=10
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=12,
        textColor=primary_color,
        spaceBefore=7,
        spaceAfter=2,
        textTransform='uppercase'
    )

    entry_title_style = ParagraphStyle(
        'EntryTitle',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=text_dark
    )

    entry_subtitle_style = ParagraphStyle(
        'EntrySubtitle',
        fontName='Helvetica',
        fontSize=9,
        leading=11,
        textColor=text_muted
    )

    body_style = ParagraphStyle(
        'Body',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=text_dark
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=text_dark,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=1.5
    )

    story = []

    # 1. Header
    story.append(Paragraph("<b>KUSHAL RUPSING MUDE</b>", title_style))
    contact_text = (
        'Pune, Maharashtra &nbsp;|&nbsp; '
        '<font color="#0284c7"><a href="mailto:kushalmude19@gmail.com">kushalmude19@gmail.com</a></font> &nbsp;|&nbsp; '
        '+91 7498362685 &nbsp;|&nbsp; '
        '<font color="#0284c7"><a href="https://www.linkedin.com/in/kushal-mude-a1363a350">LinkedIn</a></font> &nbsp;|&nbsp; '
        '<font color="#0284c7"><a href="https://github.com/kushalmude19-cell">GitHub</a></font>'
    )
    story.append(Paragraph(contact_text, contact_style))

    # Helper function for Section Headers with HR
    def add_section_header(title):
        story.append(Paragraph(f"<b>{title}</b>", section_heading_style))
        story.append(HRFlowable(width="100%", thickness=1, color=line_color, spaceAfter=4, spaceBefore=1))

    # 2. Education
    add_section_header("EDUCATION")
    
    edu_col1 = Paragraph("<b>Bachelor of Engineering (B.E.) in Computer Engineering</b><br/>"
                         "<font color='#475569'>Sinhgad College of Engineering, Vadgaon (BK) — Savitribai Phule Pune University (SPPU)</font>", entry_title_style)
    edu_col2 = Paragraph("<para align='right'><b>Currently in Third Year</b><br/>"
                         "<font color='#0284c7'><b>CGPA: 9.55</b></font> (FE) &nbsp;|&nbsp; <font color='#0284c7'><b>9.18</b></font> (Sem 3)</para>", entry_subtitle_style)
    
    edu_table = Table([[edu_col1, edu_col2]], colWidths=[380, 168])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 4))

    # 3. Technical Skills
    add_section_header("TECHNICAL SKILLS")
    skills_data = [
        ("Languages:", "Python, C++, JavaScript (ES6+), SQL, HTML5, CSS3"),
        ("Web & Full-Stack:", "React.js, Next.js (App Router), Node.js, Express.js, MongoDB, Tailwind CSS"),
        ("AI & Machine Learning:", "Google Gemini API, PyTorch, Scikit-learn"),
        ("Developer Tools & Core:", "Git, GitHub, Supabase, OOP, DBMS, OS, Computer Networks")
    ]
    for label, items in skills_data:
        story.append(Paragraph(f"&bull;&nbsp; <b>{label}</b> {items}", bullet_style))
    story.append(Spacer(1, 4))

    # 4. Featured Projects (Directly from Website)
    add_section_header("PROJECTS")

    # Project 1: Metrica
    p1_title = Paragraph("<b>Metrica – Digital Instrument Trust & Verification Platform</b> &nbsp;|&nbsp; "
                         "<font color='#0284c7'><a href='https://metrica-team-kushal-mangal.vercel.app'>[Live Demo]</a></font> "
                         "<font color='#0284c7'><a href='https://github.com/LuckyJadhav2808/Metrica-Team-Kushal-Mangal'>[GitHub]</a></font>", entry_title_style)
    p1_time = Paragraph("<para align='right'><font color='#475569'><b>GovTech & Enterprise</b></font></para>", entry_subtitle_style)
    p1_meta = Paragraph("<i>Next.js 15, React 19, TypeScript, Prisma ORM, Supabase / PostgreSQL, Leaflet GIS, Tailwind CSS, Zod</i>", entry_subtitle_style)

    t1 = Table([[p1_title, p1_time]], colWidths=[420, 128])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t1)
    story.append(p1_meta)
    story.append(Paragraph("&bull;&nbsp; Engineered an automated lifecycle audit & verification system for the Department of Consumer Affairs (DoCA, PS 26036).", bullet_style))
    story.append(Paragraph("&bull;&nbsp; Designed tamper-proof digital certificates, cryptographic QR auditing, and interactive GIS mapping for on-ground field inspections.", bullet_style))
    story.append(Paragraph("&bull;&nbsp; Implemented secure role-based access control (RBAC) and robust PostgreSQL database schemas with Prisma ORM.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 2: Antarctic AI (POLARIS-X)
    p2_title = Paragraph("<b>Antarctic AI (POLARIS-X) – Multimodal Intelligence Assistant</b> &nbsp;|&nbsp; "
                         "<font color='#0284c7'><a href='https://polaris-x.vercel.app'>[Live Demo]</a></font> "
                         "<font color='#0284c7'><a href='https://github.com/LuckyJadhav2808/POLARIS-X'>[GitHub]</a></font>", entry_title_style)
    p2_time = Paragraph("<para align='right'><font color='#475569'><b>AI & Gemini API</b></font></para>", entry_subtitle_style)
    p2_meta = Paragraph("<i>Google Gemini API, Python, React.js, Node.js, Express.js, MongoDB, Tailwind CSS</i>", entry_subtitle_style)

    t2 = Table([[p2_title, p2_time]], colWidths=[420, 128])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t2)
    story.append(p2_meta)
    story.append(Paragraph("&bull;&nbsp; Built an intelligent multimodal reasoning assistant integrating Google Gemini API with custom data parsing pipelines.", bullet_style))
    story.append(Paragraph("&bull;&nbsp; Engineered streaming query architecture achieving low-latency first-token responses (&lt;80ms) across multi-turn sessions.", bullet_style))
    story.append(Paragraph("&bull;&nbsp; Developed high-performance backend microservices for contextual document query parsing, memory storage, and analytics.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 3: Code Among Us
    p3_title = Paragraph("<b>Code Among Us (CodeMongUs) – Multiplayer Real-Time Arena</b> &nbsp;|&nbsp; "
                         "<font color='#0284c7'><a href='https://codemongus.netlify.app'>[Live Demo]</a></font> "
                         "<font color='#0284c7'><a href='https://github.com/LuckyJadhav2808/CodeMongUs'>[GitHub]</a></font>", entry_title_style)
    p3_time = Paragraph("<para align='right'><font color='#475569'><b>Multiplayer & Real-Time</b></font></para>", entry_subtitle_style)
    p3_meta = Paragraph("<i>React.js, Node.js, Express.js, Socket.io, Monaco Code Editor, Tailwind CSS</i>", entry_subtitle_style)

    t3 = Table([[p3_title, p3_time]], colWidths=[420, 128])
    t3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t3)
    story.append(p3_meta)
    story.append(Paragraph("&bull;&nbsp; Created a real-time multiplayer coding platform inspired by Among Us, fusing social deduction mechanics with competitive coding.", bullet_style))
    story.append(Paragraph("&bull;&nbsp; Integrated Monaco Editor for in-browser syntax evaluation, live execution, and bi-directional real-time room synchronization via Socket.io.", bullet_style))
    story.append(Paragraph("&bull;&nbsp; Optimized event broadcasting to handle concurrent player actions with sub-50ms latency.", bullet_style))
    story.append(Spacer(1, 4))

    # 5. Hackathon & Collaborative Experience
    add_section_header("HACKATHON EXPERIENCE & LEADERSHIP")

    story.append(Paragraph("<b>Smart India Hackathon / DoCA Track (2026)</b> &nbsp;|&nbsp; <i>Team: Kushal-Mangal</i>", entry_title_style))
    story.append(Paragraph("&bull;&nbsp; Selected for Problem Statement 26036 (Department of Consumer Affairs); led full-stack system architecture and deployment for Metrica.", bullet_style))

    story.append(Paragraph("<b>Velora Hackathon</b> &nbsp;|&nbsp; <i>Team: Fourtified Minds</i>", entry_title_style))
    story.append(Paragraph("&bull;&nbsp; Developed 'Code Among Us'; architected game logic and real-time state synchronization for live coding puzzles under 24-hr constraints.", bullet_style))

    story.append(Paragraph("<b>AI for Bharat Hackathon</b> &nbsp;|&nbsp; <i>Team: Bit Beast</i>", entry_title_style))
    story.append(Paragraph("&bull;&nbsp; Built 'Comic Forge' — text-to-comic multimodal prototype generating visual storytelling scenes with AI models.", bullet_style))

    story.append(Paragraph("&bull;&nbsp; Active participant in collegiate and national hackathons, leading system architecture, rapid prototyping, and presentation.", bullet_style))
    story.append(Spacer(1, 4))

    # 6. Certifications
    add_section_header("CERTIFICATIONS")
    story.append(Paragraph("&bull;&nbsp; <b>Certificate of Participation</b> — Smart India Hackathon / DoCA Track", bullet_style))
    story.append(Paragraph("&bull;&nbsp; <b>Certificate of Participation</b> — Velora Hackathon (Team Fourtified Minds)", bullet_style))
    story.append(Paragraph("&bull;&nbsp; <b>Certificate of Participation</b> — AI for Bharat Hackathon (Team Bit Beast)", bullet_style))

    doc.build(story)
    print(f"Resume generated successfully at: {output_path}")

if __name__ == "__main__":
    out = os.path.abspath(r"c:\Users\HP\.antigravity-ide\Portfolio\public\resume.pdf")
    generate_resume(out)
