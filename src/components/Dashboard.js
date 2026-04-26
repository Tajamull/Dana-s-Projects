import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { 
  Box, Users, Zap, Settings, Edit3, Search, MoreVertical, 
  Moon, MessageSquare, ChevronDown, Plus, Radio, CheckCheck, 
  Image as ImageIcon, Smile, Paperclip, LayoutGrid, Share2, 
  Filter, PlayCircle, FileText, Mic, Globe, Hash, Sun
} from 'lucide-react';

// --- TypeScript Interface added for data/props ---
interface DashboardProps {
  data?: any; 
}

const BoxpadPro: React.FC<DashboardProps> = ({ data }) => {
  // loading state abhi bhi wahi hai jo aapne rakhi thi
  const [loading, setLoading] = useState(true); 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeChatId, setActiveChatId] = useState(1);

  // Simulation: 2.5 seconds fetching time (Wahi logic jo aapne di thi)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const usersList = [
    { id: 1, name: "Olivia Mckinsey", msg: "Oh my god 😍 I'll try it ASAP, thank...", time: "23:23", initial: "O", color: "#A855F7" },
    { id: 2, name: "Sara Williams", msg: "Good Evening, Emily! Hope you are...", time: "23:16", initial: "S", color: "#FBBF24" },
    { id: 3, name: "Frank Thompson", msg: "Thank you for signing up Frank!", time: "22:28", initial: "F", color: "#60A5FA" },
    { id: 4, name: "Grace Lee", msg: "I am sending you the report...", time: "20:43", initial: "G", color: "#F87171" }
  ];

  return (
    <div className={`app-frame ${isDarkMode ? 'dark-theme' : ''}`}>
      <header className="top-nav">
        <div className="nav-l">
          <div className="logo">heyy</div>
          <div className="tabs">
            <div className="t-item active"><Box size={16}/> Inbox</div>
            <div className="t-item"><Users size={16}/> Contacts</div>
            <div className="t-item"><Zap size={16}/> AI Employees</div>
            <div className="t-item"><Globe size={16}/> Campaigns</div>
          </div>
        </div>
        <div className="nav-r">
          <button onClick={() => setIsDarkMode(!isDarkMode)} style={{background:'none', border:'none', cursor:'pointer', color:'inherit', marginRight:'15px'}}>
            {isDarkMode ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <div className="user-profile" style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <div className="mini-av" style={{width:'32px', height:'32px', background:'#F43F5E', color:'white', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', fontSize:'12px'}}>M</div>
            <span style={{fontSize:'13px', fontWeight:'700'}}>Michael Johnson</span>
          </div>
        </div>
      </header>

      <div className="main-grid">
        {/* SIDEBAR */}
        <aside className="sidebar-left">
          <div className="side-sec">
            <label>INBOX</label>
            <div className="s-row"><MessageSquare size={14}/> My Inbox</div>
            <div className="s-row"><Users size={14}/> All <span className="badge">28</span></div>
            <div className="s-row"><Radio size={14}/> Unassigned <span className="badge">5</span></div>
          </div>
          <div className="side-sec">
            <label className="collapsible">TEAMS <ChevronDown size={10}/></label>
            <div className="s-row">Sales <span className="badge">7</span></div>
            <div className="s-row">Support <span className="badge">16</span></div>
          </div>
          <div className="side-sec">
            <label className="collapsible">USERS <ChevronDown size={10}/></label>
            <div className="s-row focused">Michael Johnson <span className="badge">11</span></div>
            <div className="s-row">Emily Davis</div>
          </div>
        </aside>

        {/* CHAT SELECTOR WITH FETCHING */}
        <section className="chat-selector">
          <div className="selector-head">
            <h3 style={{fontSize:'14px', fontWeight:'800', margin:0}}><Box size={14}/> Michael Johnson</h3>
            <Edit3 size={16} color="#94a3b8" />
          </div>
          <div className="search-wrap">
            <Search size={16} className="si"/>
            <input type="text" placeholder="Search Chat..." />
            <Filter size={16} className="fi"/>
          </div>
          
          <div className="chat-cards-container">
            {loading ? (
              // SKELETON CARDS (Apka Design)
              [1, 2, 3, 4, 5].map(i => (
                <div key={i} className="chat-card">
                  <div className="skeleton" style={{width:'40px', height:'40px', borderRadius:'50%'}}></div>
                  <div style={{flex:1, marginLeft:'10px'}}>
                    <div className="skeleton" style={{width:'60%', height:'12px', marginBottom:'8px'}}></div>
                    <div className="skeleton" style={{width:'90%', height:'10px'}}></div>
                  </div>
                </div>
              ))
            ) : (
              usersList.map(u => (
                <div key={u.id} className={`chat-card ${activeChatId === u.id ? 'active' : ''}`} onClick={() => setActiveChatId(u.id)}>
                  <div className="dp" style={{backgroundColor: u.color}}>{u.initial}</div>
                  <div className="c-info">
                    <div className="c-top" style={{display:'flex', justifyContent:'space-between', marginBottom:'4px'}}>
                      <strong style={{fontSize:'13px'}}>{u.name}</strong> 
                      <span style={{fontSize:'11px', color:'#94a3b8'}}>{u.time}</span>
                    </div>
                    <p style={{margin:0, fontSize:'12px', color:'#64748b', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{u.msg}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* CHAT VIEW WITH FETCHING */}
        <main className="chat-view">
          <header className="cv-head">
            <h2 style={{fontSize:'15px', fontWeight:'800', margin:0}}>Olivia Mckinsey</h2>
            <div style={{display:'flex', gap:'15px', color:'#94a3b8'}}>
               <Search size={18}/> <MoreVertical size={18}/>
            </div>
          </header>
          <div className="msg-stream">
            {loading ? (
               <>
                 <div className="skeleton" style={{width:'60%', height:'60px', borderRadius:'12px', marginBottom:'15px'}}></div>
                 <div className="skeleton" style={{width:'50%', height:'50px', borderRadius:'12px', marginBottom:'15px', alignSelf:'flex-end'}}></div>
                 <div className="skeleton" style={{width:'40%', height:'40px', borderRadius:'12px'}}></div>
               </>
            ) : (
              <>
                <div style={{textAlign:'center', margin:'10px 0 20px'}}><span style={{fontSize:'11px', background:'#e2e8f0', padding:'4px 12px', borderRadius:'10px', color:'#64748b', fontWeight:'700'}}>28 August 2025</span></div>
                <div className="msg msg-left">Hi, I recently joined Fit4Life and I have some questions about my plan.</div>
                <div className="msg msg-right">Hello Olivia 👋 I'm Michael. I'd be happy to help you with that! <CheckCheck size={12}/></div>
              </>
            )}
          </div>
          <div className="input-bar">
            <input className="input-field" type="text" placeholder="Type a message..." />
            <div className="bar-tools">
              <div className="tools-l">
                <ImageIcon size={18}/> <PlayCircle size={18}/> <FileText size={18}/> <Smile size={18}/> <Share2 size={18}/>
              </div>
              <div className="tools-r" style={{display:'flex', alignItems:'center', gap:'15px'}}>
                <div className="zap-btn"><Zap size={14} fill="currentColor"/></div>
                <Mic size={18} color="#94a3b8"/>
              </div>
            </div>
          </div>
        </main>

        {/* DETAILS PANEL WITH FETCHING */}
        <aside className="details-panel">
          <div className="p-head">Details <LayoutGrid size={16}/></div>
          {loading ? (
             <div className="skeleton" style={{width:'100%', height:'250px', marginTop:'20px'}}></div>
          ) : (
            <>
              <div className="p-sec">
                <label>Chat Data</label>
                <div className="data-row"><span>Assignee</span> <div className="user-sm"><div className="mini-av">J</div> James</div></div>
                <div className="data-row"><span>Team</span> <div className="user-sm"><div className="mini-av">S</div> Sales</div></div>
              </div>
              <div className="p-sec">
                <label>Contact Data</label>
                <div className="data-row"><span>Phone</span> <strong>+1 312 555-01</strong></div>
              </div>
              <div className="p-sec">
                <label>Labels</label>
                <div style={{display:'flex', gap:'5px', flexWrap:'wrap'}}>
                  <span className="tag blue">Closed Won</span>
                  <span className="tag sky">Chicago</span>
                </div>
              </div>
              <div className="p-sec">
                <label>Notes</label>
                <div className="note-box-yellow">Customer interested in upgrading plan.</div>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};

export default BoxpadPro;