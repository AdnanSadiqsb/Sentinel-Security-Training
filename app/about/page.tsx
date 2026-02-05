import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="About"
        title="About Sentinel Security Training"
        description="Professional, operationally grounded security training delivered by experienced instructors."
      />

      {/* ABOUT US first */}
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow">
        <h2 className="text-lg font-semibold text-white">About Us</h2>

        <p>
          At CONOPS Training, your instructors H. and Loui bring over 50 years of combined
          experience across defence, security operations, and the wider civilian security
          sector. Both have served extensively within the British Army and have continued
          their careers in private security, operational management, and specialist training
          roles.
        </p>

        <p>
          Their backgrounds span frontline soldiering, international deployments, risk
          management, estate and asset protection, programme delivery, and leadership across
          complex environments. This blend of military and civilian experience ensures every
          course is grounded in real operational understanding, not classroom theory.
        </p>

        <p>
          Together, H. and Loui have delivered training and operational support across both
          military and civilian settings. Their civilian experience includes UHNW security,
          corporate security management, estate operations, logistics oversight, programme
          coordination, and working with multi-agency partners across government, private
          sector, and international organisations.
        </p>

        <p>
          They have trained frontline soldiers deploying to high-risk environments, supported
          organisational change programmes, strengthened operational systems, and delivered
          specialist instruction across Close Protection, Door Supervision, Physical
          Intervention, Conflict Management, and multiple First Aid disciplines.
        </p>

        <p>
          Together, H. and Loui provide a training experience that is authentic, operationally
          grounded, and built on decades of genuine expertise ensuring every learner leaves
          confident, capable, and ready for the demands of today’s security roles.
        </p>
      </div>

      {/* ABOUT US: CLOSE PROTECTION READINESS */}
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow">
        <h2 className="text-lg font-semibold text-white">Building Close Protection Readiness</h2>

        <div>
          <h3 className="text-white font-semibold">Start with outcomes</h3>
          <p>
            Close protection training is most effective when learners know the expected standard. Define outcomes
            first, such as safe route planning, advance work, and professional conduct.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold">Structure assessments in stages</h3>
          <p>
            Use short, realistic stages rather than a single long assessment. Early stages can test communication
            and observation. Later stages should replicate operational pressure without unnecessary complexity.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold">Make expectations explicit</h3>
          <p>
            Explain assessment criteria before each stage. Learners perform better when they understand what is
            being measured and how evidence is recorded.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold">Use short debriefs</h3>
          <p>
            Brief debriefs after each exercise allow learners to correct mistakes quickly and build confidence.
          </p>
        </div>
      </div>

      {/* CLOSE PROTECTION */}
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow">
        <h2 className="text-lg font-semibold text-white">
          Level 3 Close Protection Operative Course
        </h2>

        <p>
          Start your Close Protection career with CONOPS Training, delivered by instructors
          with over 50 years of combined military, security, and operational experience. Our
          training is grounded in real-world deployments, UHNW residential security, and
          frontline protective operations — giving learners the confidence and competence
          needed for today’s security industry.
        </p>

        <h3 className="text-white font-semibold">What the Course Covers</h3>
        <ul className="space-y-2">
          {[
            "Roles & Responsibilities of a Close Protection Operative",
            "Threat & Risk Assessment",
            "Surveillance Awareness",
            "Operational Planning",
            "Route Selection & Reconnaissance",
            "Conflict Management",
            "Physical Intervention",
            "Law & Legislation",
            "Communications & Teamwork",
            "Emergency First Aid at Work (included)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-white font-semibold">Earning Potential</h3>
        <ul className="space-y-2">
          {[
            "£150–£350 per day (UK domestic CP)",
            "£45,000–£80,000+ per year (full-time roles)",
            "£300–£600+ per day (UHNW, corporate, or international contracts)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-white font-semibold">Where You Can Work </h3>
        
        <ul className="space-y-2">
          {[
            "UHNW & Family Office Protection",
            "Corporate & Executive Protection",
            "Residential Security Teams (RST)",
            "Media, TV & Film Protection",
            "High-Profile Event Security",
            "International Assignments",
            "Security Driving Roles",
            "Protective Surveillance Teams",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CONFLICT MANAGEMENT */}
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow">
        <h2 className="text-lg font-semibold text-white">
          Conflict Management Training
        </h2>

        <p>
          Our Conflict Management training is designed for organisations whose staff regularly
          interact with the public or may face challenging behaviour. Delivered by instructors
          with over 50 years of combined defence and security experience, this course provides
          practical skills to prevent, de-escalate, and manage conflict safely and
          professionally.
        </p>

        <h3 className="text-white font-semibold">Who Needs This Training?</h3>
        <ul className="space-y-2">
          {[
            "Care homes & supported living services",
            "Private hospitals & mental health facilities",
            "Schools, colleges & education providers",
            "Retail stores & shopping centres",
            "Hospitality & leisure venues",
            "Housing associations & local authority teams",
            "Transport services",
            "Charity and outreach organisations",
            "Security teams & reception staff",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-white font-semibold">What the Course Covers</h3>
        <ul className="space-y-2">
          {[
            "Understanding conflict triggers",
            "Communication & de-escalation techniques",
            "Managing challenging behaviour",
            "Situational awareness",
            "Personal safety principles",
            "Legal responsibilities",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* PHYSICAL INTERVENTION */}
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow">
        <h2 className="text-lg font-semibold text-white">
          Physical Intervention Training
        </h2>

        <ul className="space-y-2">
          {[
            "Non-aggressive physical skills",
            "Safe holding & disengagement techniques",
            "Teamwork in intervention",
            "Reducing risk of harm",
            "Legal frameworks & duty of care",
            "Incident reporting & post-incident management",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* FIRST AID */}
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow">
        <h2 className="text-lg font-semibold text-white">
          Emergency Care First Aid – Level 3
        </h2>

        <p>
          A comprehensive first aid qualification for medium to high-risk workplaces.
        </p>

        <h3 className="text-white font-semibold">Ideal For</h3>
        <ul className="space-y-2">
          {[
            "Construction",
            "Manufacturing",
            "Warehouses",
            "Schools & colleges",
            "Transport & logistics",
            "Outdoor work environments",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow">
  <h2 className="text-lg font-semibold text-white">
   What You Learn
  </h2>

  <ul className="space-y-2">
    {[
      "Full workplace first aid",
      "Illnesses & medical conditions",
      "Injuries & trauma management",
      "Incident leadership",
      "Secondary surveys",
      "Practical scenario-based training",
    ].map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>

{/* DOOR SUPERVISOR */}
<div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow">
  <h2 className="text-lg font-semibold text-white">
    Become a Qualified SIA Door Supervisor – Train With Us
  </h2>

  <p>
    Start your career in the UK security industry with our Level 2 SIA Door
    Supervisor Course, including:
  </p>

  <ul className="space-y-2">
    {[
      "Emergency First Aid at Work",
      "Conflict Management",
      "Physical Intervention",
      "Working as a Door Supervisor",
      "Professional Standards & Responsibilities",
    ].map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>

  <p>
    Our training prepares you for real-world security work across nightlife,
    events, retail, corporate sites, and more.
  </p>

  <h3 className="text-white font-semibold">💷 How Much Can You Earn?</h3>
  <ul className="space-y-2">
    {[
      "£13–£16 per hour on average",
      "£1,900–£2,950 per month depending on hours and location",
      "Higher rates for nights, weekends, events, and festivals",
      "Opportunities to progress into team leader, CCTV operator, or corporate security roles",
    ].map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>

  <h3 className="text-white font-semibold">
    🛂 Where Can You Work With This Licence?
  </h3>
  <ul className="space-y-2">
    {[
      "Bars, pubs, nightclubs",
      "Festivals & concerts",
      "Stadiums & arenas",
      "Retail stores & shopping centres",
      "Hotels & leisure venues",
      "Corporate offices & concierge roles",
      "Static guarding and access control",
    ].map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>

  <p>This is one of the most flexible licences in the security industry.</p>

  <h3 className="text-white font-semibold">📍 Where to Find Work</h3>
  <ul className="space-y-2">
    {[
      "Indeed",
      "Totaljobs",
      "SIA-approved contractor companies",
      "Local pubs, clubs, and venues",
      "Event staffing agencies",
      "Retail chains and supermarkets",
    ].map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>

  <p>
    Most learners find work within weeks of receiving their licence.
  </p>

  <h3 className="text-white font-semibold">🎓 Why Train With Us?</h3>
  <ul className="space-y-2">
    {[
      "Experienced instructors with over 50 years in security and defence",
      "Practical, hands-on training",
      "Support with SIA application",
    ].map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>
    </div>
  );
}
