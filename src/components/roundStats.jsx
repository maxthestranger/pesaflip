import {stats} from "../data/stats.js";

const RoundStats = () => {
    return (
        <div className="w-1/4 py-7 px-5 h-screen bg-dark-2 overflow-auto">
            <div className="bg-dark-1 rounded p-5 flex items-center justify-between mb-5">
                <h2 className="text-white font-bold text-base">Round Stats</h2>
                <p className="text-white text-sm">Players: {stats.length}</p>
            </div>
            <table className="border-collapse table-auto w-full text-sm">
                <thead>
                    <tr>
                        <th className="border border-slate-700 text-white text-left px-4 py-2">Player</th>
                        <th className="border border-slate-700 text-white text-left px-4 py-2">@</th>
                        <th className="border border-slate-700 text-white text-left px-4 py-2">Amount</th>
                        <th className="border border-slate-700 text-white text-left px-4 py-2">Profit</th>
                    </tr>
                </thead>
                <tbody>
                {
                    stats.map(({id, username, bet, stopped_at}) => (
                        <tr key={id}>
                            <td className={`border-b border-slate-700 bg-dark-1 text-base font-medium text-${stopped_at >= 2 ? 'success' : stopped_at >= 10 ? 'info' : 'danger'} p-4`}>{username}</td>
                            <td className={`border-b border-slate-700 bg-dark-1 text-base font-medium text-${stopped_at >= 2 ? 'success' : stopped_at >= 10 ? 'info' : 'danger'} p-4`}>{stopped_at ? stopped_at : '-'}</td>
                            <td className={`border-b border-slate-700 bg-dark-1 text-base font-medium text-${stopped_at >= 2 ? 'success' : stopped_at >= 10 ? 'info' : 'danger'} p-4`}>{bet}</td>
                            <td className={`border-b border-slate-700 bg-dark-1 text-base font-medium text-${stopped_at >= 2 ? 'success' : stopped_at >= 10 ? 'info' : 'danger'} p-4`}>{(bet * stopped_at).toFixed(2)}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default RoundStats