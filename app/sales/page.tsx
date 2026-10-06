import "./sales.css";

export default function SalesPage() {
  return (
    <main className="sales-shell">
      <header className="sales-nav">
        <a className="sales-brand" href="/">Field<span>Flow</span></a>
        <a className="sales-signin" href="https://fieldflow-atxw.vercel.app/login">Sign in</a>
      </header>
      <section className="saleshero">
        <div className="salescopy">
          <div className="eyebrow">BUILT FOR SERVICE BUSINESSES</div>
          <h1>Stop managing your business through <em>scattered chats and spreadsheets.</em></h1>
          <p>FieldFlow gives you one place to manage customers, jobs, workers, job evidence, quotes, invoices and day-to-day field operations.</p>
          <div className="salesactions">
            <a className="btn" href="https://fieldflow-atxw.vercel.app/signup">Start 14-Day Free Trial</a>
            <a className="learn" href="/">Learn More →</a>
          </div>
          <div className="micro">Set up your company. Add your team. Start managing real work.</div>
        </div>
        <div className="phone"><div className="screen"><div className="screenhead"><b>FieldFlow</b><span>● Live</span></div><p className="hello">Operations overview</p><div className="metric"><small>ACTIVE JOBS</small><strong>12</strong><span>5 in progress</span></div><div className="twocol"><div><small>TEAM</small><b>6</b></div><div><small>COMPLETED</small><b>38</b></div></div><h4>Today</h4><div className="job"><i></i><div><b>Site maintenance</b><small>In progress · 65%</small></div></div><div className="job"><i></i><div><b>Client inspection</b><small>Scheduled · 11:00</small></div></div><div className="job"><i></i><div><b>Service call</b><small>Ready for review</small></div></div></div></div>
      </section>
      <section className="pain"><div><strong>One business.</strong><span> Not five disconnected tools.</span></div><p>Clients · Jobs · Workers · Evidence · Quotes · Invoices · Reports</p></section>
      <section className="salesbenefits"><div className="eyebrow">FROM CHAOS TO CONTROL</div><h2>Know what is happening in your business without chasing your team.</h2><div className="benefitgrid"><article><span>01</span><h3>See every job</h3><p>Know what is scheduled, underway, waiting for review and completed.</p></article><article><span>02</span><h3>Keep workers accountable</h3><p>Assigned work, checklists, updates and job evidence stay connected.</p></article><article><span>03</span><h3>Keep the office informed</h3><p>Client, operational and financial records live alongside the work.</p></article></div></section>
      <section className="for"><h2>Made for teams that work in the field.</h2><p>Cleaning · Maintenance · Construction · Roofing · Landscaping · Facilities · Repairs</p></section>
      <section className="finalsales"><div><div className="eyebrow">TRY IT WITH YOUR BUSINESS</div><h2>Give your operation a system.</h2><p>Start your 14-day FieldFlow trial and experience the workflow with your own clients, jobs and team.</p></div><div className="salesactions"><a className="btn white" href="https://fieldflow-atxw.vercel.app/signup">Start Free Trial</a><a className="learn light" href="/">Learn More →</a></div></section>
    </main>
  );
}