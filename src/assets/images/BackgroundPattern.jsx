import React from 'react'

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#f7f8fa] to-[#e8ebf0] dark:from-[#0b0f16] dark:to-[#10141a]" />

      {/* Top-right orange ring */}
      <div className="absolute -top-24 -right-20 w-[250px] h-[250px] rounded-full border-[6px] border-[#FF9F1C]/60 dark:border-[#FF9F1C]/30 blur-[0.5px] opacity-60" />

      {/* Bottom-left orange ring */}
      <div className="absolute -bottom-24 -left-20 w-[280px] h-[280px] rounded-full border-[6px] border-[#FF9F1C]/60 dark:border-[#FF9F1C]/30 blur-[0.5px] opacity-60" />

      {/* Optional subtle vignette for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/5 dark:to-black/40 pointer-events-none" />

      <div className="absolute -top-32 left-1/2 w-[400px] h-[400px] bg-[#FF9F1C]/20 rounded-full blur-[120px] opacity-50 dark:opacity-30 animate-pulse" />

    </div>
  )
}

export default BackgroundPattern