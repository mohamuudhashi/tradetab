import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const C = {
  bg: '#0c0e14',
  card: '#13161f',
  cardAlt: '#181c27',
  border: '#1e2334',
  orange: '#f97316',
  teal: '#14b8a6',
  blue: '#3b82f6',
  purple: '#a855f7',
  red: '#f43f5e',
  amber: '#f59e0b',
  white: '#ffffff',
  gray: '#6b7280',
  lightGray: '#9ca3af',
};

const icons = {
  home: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  jobs: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    </svg>
  ),
  clients: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  profile: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  newJob: (color) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  wrench: (color) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  clipboard: (color) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    </svg>
  ),
  people: (color) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  dollar: (color) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </svg>
  ),
  lock: (color) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  ),
  trash: (color) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
      <path d="M10 11v6"/><path d="M14 11v6"/>
      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
    </svg>
  ),
  close: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  check: (color) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
};

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNewJob, setShowNewJob] = useState(false);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [clientName, setClientName] = useState('');
  const [amount, setAmount] = useState('');
  const [jobStatus, setJobStatus] = useState('pending');
  const [selectedJob, setSelectedJob] = useState(null);

  const isPreview = !supabase;

  useEffect(() => {
    if (isPreview) {
      const saved = JSON.parse(localStorage.getItem('tradetab_jobs') || '[]');
      setJobs(saved);
      setLoading(false);
    } else {
      fetchJobs();
    }
  }, []);

  async function fetchJobs() {
    setLoading(true);
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setJobs(data || []);
    setLoading(false);
  }

  function saveLocal(updated) {
    localStorage.setItem('tradetab_jobs', JSON.stringify(updated));
    setJobs(updated);
  }

  async function addJob(e) {
    e.preventDefault();
    if (!title.trim()) return;
    const job = {
      id: Date.now(),
      title: title.trim(),
      notes: notes.trim(),
      client_name: clientName.trim(),
      amount: parseFloat(amount) || 0,
      status: jobStatus,
      created_at: new Date().toISOString(),
    };
    if (isPreview) {
      saveLocal([job, ...jobs]);
    } else {
      await supabase.from('jobs').insert([{
        title: job.title, notes: job.notes,
        client_name: job.client_name, amount: job.amount, status: job.status,
      }]);
      fetchJobs();
    }
    setTitle(''); setNotes(''); setClientName(''); setAmount(''); setJobStatus('pending');
    setShowNewJob(false);
  }

  async function deleteJob(id) {
    if (isPreview) {
      saveLocal(jobs.filter(j => j.id !== id));
    } else {
      await supabase.from('jobs').delete().eq('id', id);
      fetchJobs();
    }
    if (selectedJob?.id === id) setSelectedJob(null);
  }

  async function updateStatus(id, newStatus) {
    if (isPreview) {
      const updated = jobs.map(j => j.id === id ? { ...j, status: newStatus } : j);
      saveLocal(updated);
      if (selectedJob?.id === id) setSelectedJob({ ...selectedJob, status: newStatus });
    } else {
      await supabase.from('jobs').update({ status: newStatus }).eq('id', id);
      fetchJobs();
    }
  }

  const totalEarned = jobs.filter(j => j.status === 'complete').reduce((s, j) => s + (j.amount || 0), 0);
  const outstanding = jobs.filter(j => j.status !== 'complete').reduce((s, j) => s + (j.amount || 0), 0);
  const activeJobs = jobs.filter(j => j.status === 'active').length;
  const recentJobs = jobs.slice(0, 3);

  const statusColor = {
    pending: C.amber,
    active: C.orange,
    complete: C.teal,
    cancelled: C.gray,
  };
  const statusLabel = {
    pending: 'Pending',
    active: 'Active',
    complete: 'Complete',
    cancelled: 'Cancelled',
  };

  // ── MODALS ──────────────────────────────────────────────────────────────────

  const NewJobModal = () => (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(4px)', zIndex: 200,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }}>
      <div style={{
        background: C.card, borderRadius: '24px 24px 0 0',
        padding: '28px 24px 40px', width: '100%', maxWidth: '430px',
        border: `1px solid ${C.border}`, borderBottom: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700 }}>New Job</h2>
          <button onClick={() => setShowNewJob(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
            {icons.close(C.gray)}
          </button>
        </div>
        <form onSubmit={addJob} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { placeholder: 'Job Title *', value: title, set: setTitle },
            { placeholder: 'Client Name', value: clientName, set: setClientName },
            { placeholder: 'Amount (£)', value: amount, set: setAmount, type: 'number' },
          ].map((f, i) => (
            <input key={i} type={f.type || 'text'} placeholder={f.placeholder} value={f.value}
              onChange={e => f.set(e.target.value)}
              style={{
                background: C.cardAlt, border: `1px solid ${C.border}`, borderRadius: '12px',
                padding: '14px 16px', color: C.white, fontSize: '15px', outline: 'none',
              }} />
          ))}
          <textarea placeholder="Notes / Details" value={notes} onChange={e => setNotes(e.target.value)}
            rows={3} style={{
              background: C.cardAlt, border: `1px solid ${C.border}`, borderRadius: '12px',
              padding: '14px 16px', color: C.white, fontSize: '15px', outline: 'none',
              resize: 'none', fontFamily: 'inherit',
            }} />
          <select value={jobStatus} onChange={e => setJobStatus(e.target.value)}
            style={{
              background: C.cardAlt, border: `1px solid ${C.border}`, borderRadius: '12px',
              padding: '14px 16px', color: C.white, fontSize: '15px', outline: 'none',
            }}>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="complete">Complete</option>
          </select>
          <button type="submit" style={{
            background: C.orange, border: 'none', borderRadius: '14px',
            padding: '16px', color: C.white, fontSize: '16px', fontWeight: 700,
            cursor: 'pointer', marginTop: '4px',
          }}>
            Add Job
          </button>
        </form>
      </div>
    </div>
  );

  const JobDetailModal = ({ job }) => (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(4px)', zIndex: 200,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }}>
      <div style={{
        background: C.card, borderRadius: '24px 24px 0 0',
        padding: '28px 24px 40px', width: '100%', maxWidth: '430px',
        border: `1px solid ${C.border}`, borderBottom: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700 }}>{job.title}</h2>
          <button onClick={() => setSelectedJob(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
            {icons.close(C.gray)}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {['pending', 'active', 'complete'].map(s => (
            <button key={s} onClick={() => updateStatus(job.id, s)} style={{
              flex: 1, padding: '10px 6px', borderRadius: '10px', border: 'none',
              background: job.status === s ? statusColor[s] : C.cardAlt,
              color: job.status === s ? C.white : C.gray,
              fontSize: '13px', fontWeight: 600, cursor: 'pointer',
            }}>
              {statusLabel[s]}
            </button>
          ))}
        </div>

        {[
          { label: 'Client', value: job.client_name || '—' },
          { label: 'Amount', value: `£${(job.amount || 0).toFixed(2)}` },
          { label: 'Status', value: statusLabel[job.status] || job.status },
          { label: 'Notes', value: job.notes || '—' },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            padding: '14px 0', borderBottom: `1px solid ${C.border}`,
          }}>
            <span style={{ color: C.gray, fontSize: '14px' }}>{row.label}</span>
            <span style={{ color: C.white, fontSize: '14px', fontWeight: 500, textAlign: 'right', maxWidth: '60%' }}>{row.value}</span>
          </div>
        ))}

        <button onClick={() => { deleteJob(job.id); setSelectedJob(null); }} style={{
          width: '100%', marginTop: '20px', padding: '14px', borderRadius: '12px',
          background: 'rgba(244,63,94,0.12)', border: `1px solid rgba(244,63,94,0.3)`,
          color: C.red, fontSize: '15px', fontWeight: 600, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        }}>
          {icons.trash(C.red)} Delete Job
        </button>
      </div>
    </div>
  );

  // ── VIEWS ────────────────────────────────────────────────────────────────────

  const HomeView = () => (
    <div style={{ padding: '0 0 20px' }}>
      {/* Header */}
      <div style={{ padding: '20px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1.1 }}>
            <span style={{ color: C.white }}>Trade</span>
            <span style={{ color: C.orange }}>Tab</span>
          </div>
          <div style={{ color: C.gray, fontSize: '12px', fontWeight: 600, letterSpacing: '2px', marginTop: '2px' }}>
            CARPENTER
          </div>
        </div>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%', background: C.orange,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', fontWeight: 700, color: C.white,
        }}>
          M
        </div>
      </div>

      {/* Preview Banner */}
      {isPreview && (
        <div style={{ margin: '16px 20px 0' }}>
          <div style={{
            background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
            borderRadius: '14px', padding: '14px 16px',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            {icons.lock(C.amber)}
            <div>
              <div style={{ color: C.amber, fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px' }}>PREVIEW MODE</div>
              <div style={{ color: C.lightGray, fontSize: '12px', marginTop: '2px' }}>
                Data saves locally. Deploy to Vercel for live Supabase sync.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Card */}
      <div style={{ margin: '16px 20px 0' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0f2027 0%, #1a2744 50%, #0c1523 100%)',
          borderRadius: '20px', padding: '22px 20px', border: `1px solid ${C.border}`,
        }}>
          <div style={{ color: C.lightGray, fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px' }}>
            TOTAL EARNED
          </div>
          <div style={{ color: C.white, fontSize: '42px', fontWeight: 800, margin: '4px 0 18px', lineHeight: 1 }}>
            £{totalEarned.toFixed(0)}
          </div>
          <div style={{ display: 'flex', gap: '0' }}>
            {[
              { label: 'OUTSTANDING', value: `£${outstanding.toFixed(0)}`, color: C.red },
              { label: 'ACTIVE JOBS', value: activeJobs, color: C.orange },
              { label: 'TOTAL JOBS', value: jobs.length, color: C.blue },
            ].map((stat, i) => (
              <div key={i} style={{
                flex: 1, textAlign: i === 0 ? 'left' : 'center',
                borderLeft: i > 0 ? `1px solid ${C.border}` : 'none',
                paddingLeft: i > 0 ? '16px' : '0',
              }}>
                <div style={{ color: C.gray, fontSize: '10px', fontWeight: 600, letterSpacing: '1px' }}>{stat.label}</div>
                <div style={{ color: stat.color, fontSize: '22px', fontWeight: 700, marginTop: '4px' }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ padding: '24px 20px 0' }}>
        <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '14px' }}>Quick Actions</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {[
            { label: 'New Job', icon: icons.clipboard, color: C.orange, action: () => setShowNewJob(true) },
            { label: 'All Jobs', icon: icons.wrench, color: C.teal, action: () => setActiveTab('jobs') },
            { label: 'Clients', icon: icons.people, color: C.blue, action: () => setActiveTab('clients') },
            { label: 'Payments', icon: icons.dollar, color: C.purple, action: () => setActiveTab('payments') },
          ].map((item, i) => (
            <button key={i} onClick={item.action} style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: '18px',
              padding: '20px 16px', cursor: 'pointer', textAlign: 'left',
              display: 'flex', alignItems: 'center', gap: '14px',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: `${item.color}18`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {item.icon(item.color)}
              </div>
              <span style={{ color: item.color, fontSize: '16px', fontWeight: 700 }}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Jobs */}
      <div style={{ padding: '24px 20px 0' }}>
        <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '14px' }}>Recent Jobs</div>
        {loading ? (
          <div style={{ color: C.gray, textAlign: 'center', padding: '30px 0' }}>Loading...</div>
        ) : recentJobs.length === 0 ? (
          <div style={{
            background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px',
            padding: '30px', textAlign: 'center', color: C.gray, fontSize: '14px',
          }}>
            No jobs yet. Add your first job!
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {recentJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const JobCard = ({ job }) => (
    <button onClick={() => setSelectedJob(job)} style={{
      background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px',
      padding: '16px', cursor: 'pointer', textAlign: 'left', width: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ color: C.white, fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>{job.title}</div>
        <div style={{ color: C.gray, fontSize: '13px' }}>
          {job.client_name || 'No client'} · {job.amount ? `£${job.amount.toFixed(0)}` : 'No amount'}
        </div>
      </div>
      <div style={{
        background: `${statusColor[job.status] || C.gray}22`,
        color: statusColor[job.status] || C.gray,
        borderRadius: '8px', padding: '4px 10px', fontSize: '12px', fontWeight: 600,
        flexShrink: 0, marginLeft: '12px',
      }}>
        {statusLabel[job.status] || job.status}
      </div>
    </button>
  );

  const JobsView = () => (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 800 }}>All Jobs</h1>
        <button onClick={() => setShowNewJob(true)} style={{
          background: C.orange, border: 'none', borderRadius: '12px',
          padding: '10px 16px', color: C.white, fontSize: '14px', fontWeight: 700, cursor: 'pointer',
        }}>
          + New Job
        </button>
      </div>
      {loading ? (
        <div style={{ color: C.gray, textAlign: 'center', padding: '40px 0' }}>Loading...</div>
      ) : jobs.length === 0 ? (
        <div style={{
          background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px',
          padding: '40px', textAlign: 'center', color: C.gray,
        }}>
          No jobs yet
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {jobs.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      )}
    </div>
  );

  const ClientsView = () => {
    const clientMap = {};
    jobs.forEach(j => {
      const name = j.client_name || 'Unknown';
      if (!clientMap[name]) clientMap[name] = { jobs: 0, total: 0 };
      clientMap[name].jobs++;
      clientMap[name].total += j.amount || 0;
    });
    const clients = Object.entries(clientMap);

    return (
      <div style={{ padding: '20px' }}>
        <h1 style={{ margin: '0 0 20px', fontSize: '24px', fontWeight: 800 }}>Clients</h1>
        {clients.length === 0 ? (
          <div style={{
            background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px',
            padding: '40px', textAlign: 'center', color: C.gray,
          }}>
            No clients yet. Add a job with a client name.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {clients.map(([name, data], i) => (
              <div key={i} style={{
                background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px',
                padding: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: `${C.blue}22`, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: C.blue, fontSize: '18px', fontWeight: 700,
                  }}>
                    {name[0].toUpperCase()}
                  </div>
                  <div>
                    <div style={{ color: C.white, fontWeight: 600, fontSize: '15px' }}>{name}</div>
                    <div style={{ color: C.gray, fontSize: '13px' }}>{data.jobs} job{data.jobs !== 1 ? 's' : ''}</div>
                  </div>
                </div>
                <div style={{ color: C.teal, fontWeight: 700, fontSize: '16px' }}>
                  £{data.total.toFixed(0)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const PaymentsView = () => {
    const paid = jobs.filter(j => j.status === 'complete');
    const unpaid = jobs.filter(j => j.status !== 'complete');
    const totalPaid = paid.reduce((s, j) => s + (j.amount || 0), 0);
    const totalUnpaid = unpaid.reduce((s, j) => s + (j.amount || 0), 0);

    return (
      <div style={{ padding: '20px' }}>
        <h1 style={{ margin: '0 0 20px', fontSize: '24px', fontWeight: 800 }}>Payments</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {[
            { label: 'Received', value: `£${totalPaid.toFixed(0)}`, color: C.teal },
            { label: 'Outstanding', value: `£${totalUnpaid.toFixed(0)}`, color: C.red },
          ].map((s, i) => (
            <div key={i} style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px', padding: '18px',
            }}>
              <div style={{ color: C.gray, fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '8px' }}>
                {s.label.toUpperCase()}
              </div>
              <div style={{ color: s.color, fontSize: '28px', fontWeight: 800 }}>{s.value}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Unpaid Jobs</div>
        {unpaid.length === 0 ? (
          <div style={{
            background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px',
            padding: '30px', textAlign: 'center',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}>
            {icons.check(C.teal)}
            <span style={{ color: C.gray, fontSize: '14px' }}>All paid up!</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {unpaid.map(job => (
              <div key={job.id} style={{
                background: C.card, border: `1px solid ${C.border}`, borderRadius: '14px',
                padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ color: C.white, fontWeight: 600, fontSize: '15px' }}>{job.title}</div>
                  <div style={{ color: C.gray, fontSize: '13px', marginTop: '2px' }}>{job.client_name || 'No client'}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: C.orange, fontWeight: 700, fontSize: '16px' }}>
                    £{(job.amount || 0).toFixed(0)}
                  </span>
                  <button onClick={() => updateStatus(job.id, 'complete')} style={{
                    background: `${C.teal}22`, border: `1px solid ${C.teal}44`,
                    borderRadius: '8px', padding: '6px 12px', color: C.teal,
                    fontSize: '12px', fontWeight: 700, cursor: 'pointer',
                  }}>
                    Mark Paid
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const ProfileView = () => (
    <div style={{ padding: '20px' }}>
      <h1 style={{ margin: '0 0 24px', fontSize: '24px', fontWeight: 800 }}>Profile</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%', background: C.orange,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '32px', fontWeight: 800, color: C.white, marginBottom: '14px',
        }}>
          M
        </div>
        <div style={{ color: C.white, fontSize: '20px', fontWeight: 700 }}>My Business</div>
        <div style={{ color: C.gray, fontSize: '14px', marginTop: '4px' }}>Carpenter</div>
      </div>
      {[
        { label: 'Total Jobs', value: jobs.length },
        { label: 'Active Jobs', value: activeJobs },
        { label: 'Total Earned', value: `£${totalEarned.toFixed(0)}` },
        { label: 'Outstanding', value: `£${outstanding.toFixed(0)}` },
      ].map((item, i) => (
        <div key={i} style={{
          background: C.card, border: `1px solid ${C.border}`, borderRadius: '14px',
          padding: '16px 18px', marginBottom: '10px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ color: C.lightGray, fontSize: '15px' }}>{item.label}</span>
          <span style={{ color: C.white, fontSize: '15px', fontWeight: 700 }}>{item.value}</span>
        </div>
      ))}
    </div>
  );

  // ── BOTTOM NAV ───────────────────────────────────────────────────────────────

  const navItems = [
    { id: 'home', label: 'HOME', icon: icons.home },
    { id: 'jobs', label: 'JOBS', icon: icons.jobs },
    { id: 'fab', label: '', icon: null },
    { id: 'clients', label: 'CLIENTS', icon: icons.clients },
    { id: 'profile', label: 'PROFILE', icon: icons.profile },
  ];

  // ── RENDER ────────────────────────────────────────────────────────────────────

  return (
    <div style={{
      background: C.bg, minHeight: '100vh', color: C.white,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      maxWidth: '430px', margin: '0 auto', position: 'relative',
      paddingBottom: '90px',
    }}>
      {activeTab === 'home' && <HomeView />}
      {activeTab === 'jobs' && <JobsView />}
      {activeTab === 'clients' && <ClientsView />}
      {activeTab === 'payments' && <PaymentsView />}
      {activeTab === 'profile' && <ProfileView />}

      {/* Bottom Nav */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: '430px',
        background: 'rgba(13,15,20,0.95)', backdropFilter: 'blur(12px)',
        borderTop: `1px solid ${C.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        padding: '8px 0 20px', zIndex: 100,
      }}>
        {navItems.map((item) => {
          if (item.id === 'fab') {
            return (
              <button key="fab" onClick={() => setShowNewJob(true)} style={{
                width: '58px', height: '58px', borderRadius: '50%',
                background: C.orange, border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: '-20px',
                boxShadow: `0 4px 20px ${C.orange}55`,
              }}>
                {icons.newJob(C.white)}
              </button>
            );
          }
          const isActive = activeTab === item.id;
          return (
            <button key={item.id} onClick={() => setActiveTab(item.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              padding: '6px 10px',
            }}>
              {item.icon(isActive ? C.orange : C.gray)}
              <span style={{
                fontSize: '10px', fontWeight: 600, letterSpacing: '0.5px',
                color: isActive ? C.orange : C.gray,
              }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {showNewJob && <NewJobModal />}
      {selectedJob && <JobDetailModal job={selectedJob} />}
    </div>
  );
}

export default App;
