import React from 'react'
import CardPengaduan from './CardPengaduan'

export default function ListPengaduan({listPengaduan}) {
    
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {listPengaduan.map((pengaduan) => (
                <CardPengaduan key={pengaduan.id} pengaduan={pengaduan} />
            ))}
        </div>
    );
};
