import HeroSection from '@/components/home/HeroSection'
import ProjectGrid from '@/components/projects/ProjectGrid'
import AboutSection from '@/components/about/AboutSection'
import SkillsScroller from '@/components/skills/SkillsScroller'
import BlogSection from '@/components/blogs/BlogSection'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-transparent backdrop-blur-md">
      <HeroSection />
      <AboutSection />
      <ProjectGrid />
      <SkillsScroller />
      <BlogSection />
    </main>
  )
}