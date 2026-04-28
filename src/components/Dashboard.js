import React, { useState, useEffect, useMemo, useRef } from 'react';
import './Dashboard.css';
import { 
  Users, Zap, Edit3, Search, MoreVertical, Moon, MessageSquare, 
  ChevronDown, Plus, CheckCheck, Image as ImageIcon, Smile, 
  Paperclip, LayoutGrid, PlayCircle, Sun, Camera, MessageCircle, 
  Phone, Mail, Star, Send, UserPlus, AlertCircle, Inbox, Activity, 
  Mic, Settings, ShieldCheck, Clock, Globe, Archive, Hash, 
  Bell, Lock, LogOut, ChevronRight, Filter, Share2, Trash2, 
  Layers, Bookmark, Download, Maximize2, Info
} from 'lucide-react';
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";



/**
 * BOXPAD PRO ENTERPRISE - V4.0
 * @param {Object} props - Destructured 'data' from parent
 */
const BoxpadPro = ({ data }) => {
  // --- 1. STATE ARCHITECTURE ---
  const [phase, setPhase] = useState(1); 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeChatId, setActiveChatId] = useState(1);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const [openSections, setOpenSections] = useState({
    inbox: true,
    teams: true,
    contactInfo: true,
    sharedMedia: true,
    channels: true
  });

  // --- 2. SEQUENTIAL FETCHING ENGINE ---
  useEffect(() => {
    // Stage 1: Handshake
    const t1 = setTimeout(() => setPhase(2), 1000);
    // Stage 2: Layout Injection
    const t2 = setTimeout(() => setPhase(3), 2500);
    // Stage 3: Full Data Hydration
    const t3 = setTimeout(() => setPhase(4), 3800);

    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
      clearTimeout(t3); 
    };
  }, []);

  // Auto-scroll logic for chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [phase, activeChatId]);

  // --- 3. DATA REPOSITORY ---
  const contacts = useMemo(() => [
    { id: 1, name: "Olivia Mckinsey", msg: "Pixel-perfect logic integrated! 🚀", time: "21:45", color: "#A855F7", status: "online", role: "UI Architect" },
    { id: 2, name: "Sara Williams", msg: "Check the glassmorphism blur.", time: "18:30", color: "#FBBF24", status: "away", role: "Lead Designer" },
    { id: 3, name: "Frank Thompson", msg: "API documentation updated.", time: "15:20", color: "#60A5FA", status: "online", role: "Full Stack" },
    { id: 4, name: "Zoya Khan", msg: "DevDana dashboard is fire.", time: "12:12", color: "#EC4899", status: "busy", role: "Product Manager" },
    { id: 5, name: "Alex Rivera", msg: "Shared the Figma assets.", time: "10:00", color: "#10B981", status: "offline", role: "Motion Designer" },
    { id: 6, name: "Tajamull Dana", msg: "Areena Admin Dashboard ready.", time: "09:45", color: "#f43f5e", status: "online", role: "Frontend Dev" }
  ], []);

  // --- 4. COMPONENT HANDLERS (Fix applied here) ---
  const toggleSection = (key) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage("");
      setIsTyping(false);
    }
  };

  const currentChat = contacts.find(c => c.id === activeChatId) || contacts[0];

  // --- 5. RENDER LOGIC ---
  return (
    <div className={`app-frame ${isDarkMode ? 'dark-theme' : ''}`}>
      
      {/* HEADER SECTION */}
      <header className="top-nav">
        <div className="nav-l">
          <div className="logo-wrapper">
            {phase === 1 ? (
              <div className="boot-loader">
                <Zap size={28} className="zap-glow-spin" />
                <span>BOXpad</span>
              </div>
            ) : (
              <div className="logo-final fade-in-scale">
                {/* <Zap size={28} fill="#f43f5e" stroke="#f43f5e"/> */}
                <span className="logo-text">heyy</span>
              </div>
            )}
          </div>
          {phase >= 2 && (
            <nav className="tabs slide-in-top">
              <div className="t-item active"><Inbox size={16}/> Inbox</div>
              <div className="t-item"><Users size={16}/> Teams</div>
              <div className="t-item"><Activity size={16}/> Analytics</div>
              <div className="t-item"><Layers size={16}/> Projects</div>
            </nav>
          )}
        </div>

        <div className="nav-r">
          <div className="global-search-pill">
            <Search size={16} />
            <input type="text" placeholder="Quick search..." />
            <span className="search-kb">⌘K</span>
          </div>
          <div className="header-actions">
            <button className="h-btn"><Bell size={18}/><div className="notif-dot"></div></button>
            <button className="h-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
          </div>
          <div className="user-profile-card">
            <div className="u-avatar">D</div>
            <div className="u-info"><strong>Michael Johnson</strong><span>Enterprise</span></div>
          </div>
        </div>
      </header>

      <div className="main-grid">
        
        {/* LEFT SIDEBAR PANEL */}
        <aside className={`sidebar-left ${phase < 2 ? 'is-hidden' : 'is-visible'}`}>
          {phase === 2 ? (
            <div className="sidebar-skeleton">
              {[1,2,3,4,5,6].map(i => <div key={i} className="skel-line" />)}
            </div>
          ) : (
            <div className="sidebar-scrollable">
              <div className="side-sec">
                <div className="sec-header" onClick={() => toggleSection('inbox')}>
                  <label>MY WORKSPACE</label>
                  <ChevronDown size={14} className={openSections.inbox ? 'rotate' : ''} />
                </div>
                {openSections.inbox && (
                  <div className="sec-content animate-slide-down">
                    <div className="s-row active"><MessageSquare size={14}/> All Messages <span className="badge">12</span></div>
                    <div className="s-row"><Star size={14}/> Important</div>
                    <div className="s-row"><Archive size={14}/> Archive</div>
                  </div>
                )}
              </div>

              <div className="side-sec">
                <div className="sec-header" onClick={() => toggleSection('teams')}>
                  <label>TEAMS</label>
                  <ChevronDown size={14} className={openSections.teams ? 'rotate' : ''} />
                </div>
                {openSections.teams && (
                  <div className="sec-content animate-slide-down">
                    <div className="s-row"><div className="dot blue"></div> Sales</div>
                    <div className="s-row"><div className="dot purple"></div> Costumer Support</div>
                    <div className="s-row"><div className="dot green"></div> Frontend Unit</div>
                  </div>
                )}
              </div>

              <div className="side-sec">
                <div className="sec-header" onClick={() => toggleSection('channels')}>
                  <label>CHANNELS</label>
                  <ChevronDown size={14} className={openSections.channels ? 'rotate' : ''} />
                </div>
                {openSections.channels && (
                  <div className="sec-content animate-slide-down">
                    <div className="s-row"><Hash size={14}/> development</div>
                    <div className="s-row"><Hash size={14}/> <BiLogoWhatsapp /> Whatsapp</div>
                    <div className="s-row"><Hash size={14}/> <BiLogoInstagram /> Instagram</div>
                  </div>
                )}
              </div>

              <div className="sidebar-footer">
                <div className="s-row"><Settings size={14}/> Settings</div>
                <div className="s-row text-danger"><LogOut size={14}/> Logout</div>
              </div>
            </div>
          )}
        </aside>

        {/* MIDDLE CHAT HUB */}
        <section className={`chat-hub ${phase < 3 ? 'is-hidden' : 'is-visible'}`}>
          <div className="chat-selector-col">
            <div className="sel-head">
              <h3>Messages</h3>
              <div className="action-btns"><button className="circle-btn"><Edit3 size={16}/></button></div>
            </div>
            <div className="sel-search">
              <Search size={16} className="search-icon" />
              <input type="text" placeholder="Search chats..." onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="chat-cards-list">
              {phase === 3 ? (
                [1,2,3,4,5,6].map(i => <div key={i} className="skel-card-item" />)
              ) : (
                contacts.map(u => (
                  <div key={u.id} className={`chat-card ${activeChatId === u.id ? 'active' : ''}`} onClick={() => setActiveChatId(u.id)}>
                    <div className="dp-main" style={{backgroundColor: u.color}}>{u.name[0]}</div>
                    <div className="c-meta">
                      <div className="c-meta-top"><strong>{u.name}</strong> <span>{u.time}</span></div>
                      <p>{u.msg}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <main className="chat-viewport">
            {phase < 4 ? (
              <div className="viewport-loader-wrap">
                <div className="dynamic-loader"></div>
                <p>Syncing Enterprise Channels...</p>
              </div>
            ) : (
              <div className="chat-interface animate-fade-up">
                <header className="viewport-header">
                  <div className="vp-user">
                    <div className="vp-av" style={{background: currentChat.color}}>{currentChat.name[0]}</div>
                    <div className="vp-details">
                      <h2>{currentChat.name}</h2>
                      <span className="vp-status"><div className="online-dot"></div> online</span>
                    </div>
                  </div>
                  <div className="vp-actions">
                    <div className="tool-box"><Phone size={18}/></div>
                    <div className="tool-box"><Camera size={18}/></div>
                    <div className="tool-box"><MoreVertical size={18}/></div>
                  </div>
                </header>

                <div className="message-container" ref={scrollRef}>
                  <div className="date-stamp"><span>Monday, 27 April</span></div>
                  <div className="msg msg-left">
                    Bhai, Pure JavaScript code update kar diya hai. Ab error nahi aayega!
                    <div className="msg-time">21:30</div>
                  </div>
                  <div className="msg msg-right">
                    Zabardast! Bento grid layout aur animations bohot smooth hain. <CheckCheck size={14}/>
                    <div className="msg-time">21:32</div>
                  </div>
                  {isTyping && <div className="typing-indicator"><span></span><span></span><span></span></div>}
                </div>

                <div className="input-zone">
                  <div className="input-bento-box">
                    <div className="input-main-row">
                      <button className="add-btn"><Plus size={22}/></button>
                      <input 
                        type="text" 
                        placeholder={`Message ${currentChat.name}...`} 
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          setIsTyping(e.target.value.length > 0);
                        }}
                      />
                      <button className="emoji-btn"><Smile size={22}/></button>
                    </div>
                    <div className="input-footer-row">
                      <div className="tools-group"><ImageIcon size={18}/> <Paperclip size={18}/> <Mic size={18}/> <Lock size={18}/></div>
                      <button className="main-send-btn" onClick={handleSendMessage}><Send size={18}/><span>Send Message</span></button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </section>

        {/* RIGHT SIDEBAR (DETAILS) */}
        <aside className={`details-panel ${phase < 2 ? 'is-hidden' : 'is-visible'}`}>
          {phase < 3 ? (
            <div className="details-skeleton">
              <div className="skel-circle" />
              <div className="skel-line" />
            </div>
          ) : (
            <div className="details-scrollable">
              <div className="profile-hero-section">
                <div className="hero-av-box" style={{background: currentChat.color}}>{currentChat.name[0]}</div>
                <h3>{currentChat.name}</h3>
                <p>{currentChat.role}</p>
                <div className="social-links">
                  <button className="soc-btn"><Mail size={16}/></button>
                  <button className="soc-btn"><Share2 size={16}/></button>
                  <button className="soc-btn"><Info size={16}/></button>
                </div>
              </div>

              <div className="det-section">
                <div className="det-head" onClick={() => toggleSection('contactInfo')}>
                  <label>INFORMATION</label>
                  <ChevronDown size={14} className={openSections.contactInfo ? 'rotate' : ''} />
                </div>
                {openSections.contactInfo && (
                  <div className="det-body animate-reveal">
                    <div className="info-item-row"><Mail size={14}/> <span>{currentChat.name.toLowerCase().replace(' ', '.')}@meta.com</span></div>
                    <div className="info-item-row"><Globe size={14}/> <span>San Francisco, USA</span></div>
                    <div className="info-item-row"><ShieldCheck size={14}/> <span>Identity Verified</span></div>
                  </div>
                )}
              </div>

              <div className="det-section">
                <div className="det-head" onClick={() => toggleSection('sharedMedia')}>
                  <label>SHARED MEDIA</label>
                  <ChevronDown size={14} className={openSections.sharedMedia ? 'rotate' : ''} />
                </div>
                {openSections.sharedMedia && (
                  <div className="media-grid animate-reveal">
                    {[1,2,3,4,5,6].map(i => <div key={i} className="media-thumb" />)}
                  </div>
                )}
              </div>

              <div className="action-list-panel">
                <div className="a-row"><Bookmark size={14}/> Saved Items</div>
                <div className="a-row"><Bell size={14}/> Mute Notifications</div>
                <div className="a-row text-danger"><Trash2 size={14}/> Delete Conversation</div>
              </div>

              <div className="reminder-sticky">
                <div className="r-head"><Clock size={14}/> <strong>Reminder</strong></div>
                <p>Don't forget to push the latest pixel-perfect bento grid updates to GitHub.</p>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default BoxpadPro;