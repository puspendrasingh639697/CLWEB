import React, { useState } from "react";
import { Plus, X, Edit2, Check, UserPlus, Users } from "lucide-react";

// Avatar generator
const avatar = (seed) =>
  `https://api.dicebear.com/7.x/avataaars/png?seed=${seed}`;

const TeamSlider = () => {
  // Initial team members
  const initialTeam = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    img: avatar(`person${i + 1}`),
    name: `Employee ${i + 1}`,
    role: "Team Member",
    isEditable: false,
  }));

  const [team, setTeam] = useState(initialTeam);
  const [newMember, setNewMember] = useState({ name: "", role: "" });
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Duplicate list for perfect infinite loop
  const loopTeam = [...team, ...team];

  // Add new team member
  const handleAddMember = () => {
    if (newMember.name.trim() && newMember.role.trim()) {
      const newId = team.length > 0 ? Math.max(...team.map(m => m.id)) + 1 : 1;
      const newTeamMember = {
        id: newId,
        img: avatar(newMember.name.toLowerCase().replace(/\s+/g, '')),
        name: newMember.name,
        role: newMember.role,
        isEditable: true,
      };
      
      setTeam([...team, newTeamMember]);
      setNewMember({ name: "", role: "" });
      setIsAdding(false);
    }
  };

  // Remove team member
  const handleRemoveMember = (id) => {
    setTeam(team.filter(member => member.id !== id));
  };

  // Start editing member
  const handleStartEdit = (id) => {
    setEditingId(id);
  };

  // Save edited member
  const handleSaveEdit = (id, field, value) => {
    setTeam(team.map(member => 
      member.id === id 
        ? { ...member, [field]: value, isEditable: true }
        : member
    ));
    setEditingId(null);
  };

  // Cancel adding new member
  const handleCancelAdd = () => {
    setIsAdding(false);
    setNewMember({ name: "", role: "" });
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-900 to-black">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-900/30 to-black mb-6 border border-emerald-700/30">
          <Users className="w-4 h-4 text-emerald-300" />
          <span className="text-emerald-300 text-sm font-bold tracking-wider">
            OUR TEAM
          </span>
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-4">
          Meet Our <span className="text-emerald-300">Growing</span> Team
        </h2>
        
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
          Our dynamic team evolves with new talents joining regularly.
          Easily manage team members with our interactive system.
        </p>
        
        {/* Add New Member Button */}
        <button
          onClick={() => setIsAdding(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-semibold hover:from-emerald-500 hover:to-emerald-700 transition-all duration-300 border border-emerald-500/30"
        >
          <UserPlus size={20} />
          Add New Team Member
        </button>
      </div>

      {/* Add New Member Form */}
      {isAdding && (
        <div className="max-w-md mx-auto mb-12 p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-black/50 backdrop-blur-sm border border-emerald-700/30">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Add New Member</h3>
            <button
              onClick={handleCancelAdd}
              className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <X className="text-gray-400" size={20} />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Name</label>
              <input
                type="text"
                value={newMember.name}
                onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                placeholder="Enter member name"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Role</label>
              <input
                type="text"
                value={newMember.role}
                onChange={(e) => setNewMember({...newMember, role: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                placeholder="Enter member role"
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleAddMember}
                className="flex-1 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-semibold hover:from-emerald-500 hover:to-emerald-700 transition-all duration-300"
              >
                Add Member
              </button>
              <button
                onClick={handleCancelAdd}
                className="flex-1 py-3 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700/50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-6 animate-slide"
          style={{ width: `${loopTeam.length * 280}px` }}
        >
          {loopTeam.map((member, i) => (
            <div
              key={`${member.id}-${i}`}
              className="relative min-w-[260px] bg-gradient-to-b from-gray-800/50 to-black/50 backdrop-blur-sm rounded-xl border border-emerald-800/20
                         hover:border-emerald-500/40 hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Remove Button for Custom Members */}
              {member.isEditable && (
                <button
                  onClick={() => handleRemoveMember(member.id)}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-red-500/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600"
                >
                  <X size={16} />
                </button>
              )}

              {/* Edit Button for Custom Members */}
              {member.isEditable && editingId !== member.id && (
                <button
                  onClick={() => handleStartEdit(member.id)}
                  className="absolute top-3 left-3 z-10 p-2 rounded-full bg-emerald-600/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-emerald-700"
                >
                  <Edit2 size={16} />
                </button>
              )}

              {/* IMAGE */}
              <div className="w-full h-64 flex justify-center items-center">
                <div className="relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-36 h-36 rounded-full object-cover border-4 border-emerald-700/30"
                  />
                  {/* Online Status Indicator */}
                  <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-emerald-500 border-2 border-gray-900"></div>
                </div>
              </div>

              {/* DETAILS */}
              <div className="text-center p-5">
                {/* Name - Editable or Static */}
                {editingId === member.id ? (
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => setTeam(team.map(m => 
                        m.id === member.id ? { ...m, name: e.target.value } : m
                      ))}
                      className="text-xl font-bold text-center bg-transparent text-white border-b border-emerald-500 focus:outline-none"
                    />
                    <button
                      onClick={() => handleSaveEdit(member.id, 'name', member.name)}
                      className="p-1 rounded bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Check size={14} className="text-white" />
                    </button>
                  </div>
                ) : (
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                )}

                {/* Role - Editable or Static */}
                {editingId === member.id ? (
                  <div className="flex items-center justify-center gap-2">
                    <input
                      type="text"
                      value={member.role}
                      onChange={(e) => setTeam(team.map(m => 
                        m.id === member.id ? { ...m, role: e.target.value } : m
                      ))}
                      className="text-emerald-300 text-center bg-transparent border-b border-emerald-500 focus:outline-none"
                    />
                    <button
                      onClick={() => handleSaveEdit(member.id, 'role', member.role)}
                      className="p-1 rounded bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Check size={14} className="text-white" />
                    </button>
                  </div>
                ) : (
                  <p className="text-emerald-300 text-sm font-medium">
                    {member.role}
                  </p>
                )}

                {/* New Member Badge */}
                {member.isEditable && (
                  <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-700/30">
                    <Plus size={12} className="text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">New</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

     

     
      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-slide {
            animation: slide 30s linear infinite;
          }

          /* Pause animation on hover */
          .relative:hover .animate-slide {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default TeamSlider;