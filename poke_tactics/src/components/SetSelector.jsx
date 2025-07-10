import { useState } from "react"

const SETS = [
  { id: "sv1", name: "Scarlet & Violet", image: "Sets/SetSV.png" },
  { id: "sv2", name: "Paldea Evolved", image: "Sets/SetPE.png" },
  { id: "sv3", name: "Obsidian Flames", image: "Sets/SetOF.png" },
  { id: "sv3pt5", name: "151", image: "Sets/Set151.png" },
  { id: "sv4", name: "Paradox Rift", image: "Sets/SetPR.png" },
  { id: "sv4pt5", name: "Paldean Fates", image: "Sets/SetPF.png" },
  { id: "sv5", name: "Temporal Forces", image: "Sets/SetTF.png" },
  { id: "sv6", name: "Twilight Masquerade", image: "Sets/SetTM.png" },
  { id: "sv6pt5", name: "Shrouded Fable", image: "Sets/SetSF.png" },
  { id: "sv7", name: "Stellar Crown", image: "Sets/SetSC.png" },
  { id: "sv8", name: "Surging Sparks", image: "Sets/SetSP.png" },
  /*{ id: "sv8pt5", name: "Prismatic Evolutions", image: "Sets/SetPEv.png" },*/
  { id: "sv9", name: "Journey Together", image: "Sets/SetJT.png" },
  { id: "sv10", name: "Destined Rivals", image: "Sets/SetDR.png" }
]

const SetSelector = ({selectedSet, setSelectedSet}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center border border-gray-300 rounded shadow bg-white h-full hover:bg-gray-50"
            >
                <img src={selectedSet.image} alt={selectedSet.name} className="w-45 h-15 m-1 object-contain"/>
            </button>

            {/*Select*/}
            {dropdownOpen&&(
                <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded shadow-lg max-h-80 overflow-auto">
                    {SETS.map(set => (
                        <div
                            key={set.id}
                            onClick={() => {
                                setSelectedSet(set);
                                setDropdownOpen(false);
                            }}
                        >
                            <img className=" w-50 h-10 object-contain" src={set.image} alt={set.name}/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SetSelector