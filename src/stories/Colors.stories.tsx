import React, { type ButtonHTMLAttributes } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import "../styles/colors.css";

// Metadati per Storybook
const meta: Meta = {
    title: 'Foundations/Colors',
    tags: ['autodocs']
}

export default meta;

// Tipo alias per le storie basato sui metadati
type Story = StoryObj<typeof meta>;

// Componente pulsante riutilizzabile che copia un valore negli appunti
const ClickToCopy: React.FC<{ value: string } & ButtonHTMLAttributes<HTMLButtonElement>> = ({ value, ...attrs }) => {

    return (

        <button className='click-to-copy'
            {...attrs}
            style={{ border: 'none', cursor: 'pointer', ...attrs.style }}
            onClick={() => navigator.clipboard.writeText(value)}
            aria-label={`Copy ${value}`}
        >
        </button>
    )
}

// Storia principale per visualizzare la palette di colori
export const Default: Story = {
    render: () =>

        <>
            <h1 className="font-size-h3">Watch Palette Design System</h1>

            {/* --- BLU--- */}
            <h2 className='font-size-h4'>Blue (Primary color)</h2>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-heavenly-${i})` }}
                        key={i}
                        value={`--color-heavenly-${i}`}
                    />
                ))}
            </div>

            {/* --- VERDI --- */}
            <h2 className='font-size-h4'>Green (New product badge color)</h2>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-green-${i})` }}
                        key={i}
                        value={`--color-green-${i}`}
                    />
                ))}
            </div>

            {/* --- ROSSI--- */}
            <h2 className='font-size-h4'>Red (Discount badge color)</h2>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-red-${i})` }}
                        key={i}
                        value={`--color-red-${i}`}
                    />
                ))}
            </div>

            {/* --- GRIGI --- */}
            <h2 className='font-size-h4'>Gray (Sold out badge color)</h2>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-gray-${i})` }}
                        key={i}
                        value={`--color-gray-${i}`}
                    />
                ))}
            </div>
        </>
}