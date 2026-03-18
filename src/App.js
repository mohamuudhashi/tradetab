import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// --- YOUR SUPABASE CONNECTION ---
// Make sure these match the keys in your .env file
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(true);

  // 1. Fetch jobs from Supabase
  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    setLoading(true);
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) console.log('error', error);
    else setJobs(data);
    setLoading(false);
  }

  // 2. Add a new job
  async function addJob(e) {
    e.preventDefault();
    if (!title) return;
    const { error } = await supabase
      .from('jobs')
      .insert([{ title, notes, status: 'pending' }]);
    if (error) console.log('error', error);
    else {
      setTitle('');
      setNotes('');
      fetchJobs();
    }
  }

  // 3. Delete a job
  async function deleteJob(id) {
    const { error } = await supabase
      .from('jobs')
      .delete()
      .eq('id', id);
    if (error) console.log('error', error);
    else fetchJobs();
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>TradeTab: Job Tracker</h1>

      <form onSubmit={addJob} style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          placeholder="Job Title (e.g. Kitchen Sink Repair)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '10px' }}
        />
        <textarea
          placeholder="Notes/Customer Details"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#24b47e', color: 'white', border: 'none', cursor: 'pointer' }}>
          Add New Job
        </button>
      </form>

      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div>
          {jobs.map(job => (
            <div key={job.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '10px', position: 'relative' }}>
              <h3>{job.title}</h3>
              <p>{job.notes}</p>
              <p><strong>Status:</strong> {job.status}</p>
              <button
                onClick={() => deleteJob(job.id)}
                style={{ position: 'absolute', top: '10px', right: '10px', color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

