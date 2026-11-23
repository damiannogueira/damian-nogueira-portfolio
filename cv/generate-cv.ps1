param(
  [string]$DocxPath = (Join-Path $PSScriptRoot "Damian_Nogueira_CV_2026.docx"),
  [string]$PdfPath = (Join-Path (Split-Path $PSScriptRoot -Parent) "public\Damian_Nogueira_CV_2026.pdf")
)

$ErrorActionPreference = "Stop"

function Add-Paragraph {
  param(
    [Parameter(Mandatory)]$Document,
    [Parameter(Mandatory)][string]$Text,
    [double]$Size = 9.5,
    [bool]$Bold = $false,
    [double]$SpaceBefore = 0,
    [double]$SpaceAfter = 2.5,
    [double]$LineSpacing = 11.2,
    [int]$Alignment = 0,
    [string]$Color = "222222"
  )

  $end = $Document.Content.End - 1
  $range = $Document.Range($end, $end)
  $paragraph = $Document.Paragraphs.Add($range)
  $paragraph.Range.Text = $Text
  $paragraph.Range.ListFormat.RemoveNumbers()
  $paragraph.Range.Font.Name = "Arial"
  $paragraph.Range.Font.Size = $Size
  $paragraph.Range.Font.Bold = [int]$Bold
  $paragraph.Range.Font.Color = [System.Convert]::ToInt32($Color, 16)
  $paragraph.Alignment = $Alignment
  $paragraph.Format.SpaceBefore = $SpaceBefore
  $paragraph.Format.SpaceAfter = $SpaceAfter
  $paragraph.Format.LineSpacingRule = 4
  $paragraph.Format.LineSpacing = $LineSpacing
  $paragraph.Range.InsertParagraphAfter()
  return $paragraph
}

function Add-SectionHeading {
  param([Parameter(Mandatory)]$Document, [Parameter(Mandatory)][string]$Text)
  $paragraph = Add-Paragraph -Document $Document -Text $Text -Size 10.3 -Bold $true -SpaceBefore 8 -SpaceAfter 3 -LineSpacing 12 -Color "256B47"
  $paragraph.Format.KeepWithNext = $true
  $paragraph.Range.ParagraphFormat.Borders.Item(-3).LineStyle = 1
  $paragraph.Range.ParagraphFormat.Borders.Item(-3).Color = [System.Convert]::ToInt32("D7D5D0", 16)
  return $paragraph
}

function Add-Bullet {
  param([Parameter(Mandatory)]$Document, [Parameter(Mandatory)][string]$Text)
  $paragraph = Add-Paragraph -Document $Document -Text $Text -Size 9.2 -SpaceAfter 2.5 -LineSpacing 11
  $paragraph.Range.ListFormat.ApplyBulletDefault()
  $paragraph.LeftIndent = 14
  $paragraph.FirstLineIndent = -9
  $paragraph.Format.SpaceBefore = 0
  $paragraph.Format.SpaceAfter = 2.5
  $paragraph.Format.LineSpacingRule = 4
  $paragraph.Format.LineSpacing = 11
  return $paragraph
}

function Add-HyperlinkByText {
  param(
    [Parameter(Mandatory)]$Document,
    [Parameter(Mandatory)][string]$Label,
    [Parameter(Mandatory)][string]$Url
  )

  $range = $Document.Content.Duplicate
  $range.Find.ClearFormatting()
  $range.Find.Text = $Label
  if ($range.Find.Execute()) {
    $Document.Hyperlinks.Add($range, $Url) | Out-Null
  }
}

$word = $null
$document = $null

try {
  $word = New-Object -ComObject Word.Application
  $word.Visible = $false
  $word.DisplayAlerts = 0
  $document = $word.Documents.Add()

  $section = $document.Sections.Item(1)
  $section.PageSetup.TopMargin = 34
  $section.PageSetup.BottomMargin = 34
  $section.PageSetup.LeftMargin = 42
  $section.PageSetup.RightMargin = 42

  Add-Paragraph -Document $document -Text "DAMIÁN IGNACIO NOGUEIRA" -Size 20 -Bold $true -SpaceAfter 2 -LineSpacing 22 -Alignment 1 | Out-Null
  Add-Paragraph -Document $document -Text "Frontend AI Engineer & Full-Stack Developer" -Size 11.5 -Bold $true -SpaceAfter 3 -LineSpacing 13 -Alignment 1 -Color "256B47" | Out-Null

  Add-Paragraph -Document $document -Text "Maciá, Entre Ríos, Argentina  |  +54 341 367-7150  |  damian.nogueira@outlook.com  |  LinkedIn  |  GitHub  |  damiannogueira.com" -Size 8.6 -SpaceAfter 5 -LineSpacing 10.2 -Alignment 1 -Color "4B5563" | Out-Null

  Add-SectionHeading -Document $document -Text "PROFESSIONAL SUMMARY" | Out-Null
  Add-Paragraph -Document $document -Text "Frontend AI Engineer and full-stack developer focused on clear product interfaces with React, TypeScript, and Next.js. I use AI-assisted workflows for planning, implementation, review, debugging, and validation, while keeping technical decisions and quality checks explicit. My projects also include Java/Spring Boot APIs, authentication, SQL data, automated testing, Docker, and production deployment. Currently completing the University Technical Degree in Programming at Universidad Tecnológica Nacional (UTN)." -Size 9.4 -SpaceAfter 3 -LineSpacing 11.5 | Out-Null

  Add-SectionHeading -Document $document -Text "TECHNICAL SKILLS" | Out-Null
  Add-Paragraph -Document $document -Text "Frontend: React, TypeScript, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, Vite, responsive UI" -Size 9 -SpaceAfter 1.5 -LineSpacing 10.7 | Out-Null
  Add-Paragraph -Document $document -Text "AI Engineering: AI-assisted planning, implementation, debugging, review, documentation, and validation" -Size 9 -SpaceAfter 1.5 -LineSpacing 10.7 | Out-Null
  Add-Paragraph -Document $document -Text "Full-Stack: Java, Spring Boot, REST APIs, JPA/Hibernate, MySQL, PostgreSQL, Supabase, authentication" -Size 9 -SpaceAfter 1.5 -LineSpacing 10.7 | Out-Null
  Add-Paragraph -Document $document -Text "Delivery: automated testing, JUnit, Mockito, MockMvc, ESLint, Git/GitHub, Docker, Vercel, Render, Railway" -Size 9 -SpaceAfter 1.5 -LineSpacing 10.7 | Out-Null

  Add-SectionHeading -Document $document -Text "EXPERIENCE & APPLIED LEARNING" | Out-Null
  Add-Paragraph -Document $document -Text "FlyRank AI  |  AI Engineering Program  |  Jun 2026 – Present  |  Remote" -Size 9.4 -Bold $true -SpaceAfter 2 -LineSpacing 11 | Out-Null
  Add-Bullet -Document $document -Text "Completed Frontend AI Engineering while developing Lynkroam with Next.js, React, TypeScript, Tailwind CSS, responsive UI, testing, and validation." | Out-Null
  Add-Bullet -Document $document -Text "Completed AI Fluency, applying structured AI-assisted workflows for planning, implementation, debugging, review, documentation, and human validation." | Out-Null
  Add-Bullet -Document $document -Text "Currently completing Machine Learning training to build practical knowledge of ML concepts and workflows." | Out-Null

  Add-SectionHeading -Document $document -Text "SELECTED PROJECTS" | Out-Null
  Add-Paragraph -Document $document -Text "Skillentis  |  Creator & Full-Stack Developer  |  Live" -Size 9.4 -Bold $true -SpaceAfter 2 -LineSpacing 11 | Out-Null
  Add-Bullet -Document $document -Text "Built and launched a React, TypeScript, and Supabase developer-evolution product with GitHub data integration, authentication, bilingual responsive UI, SEO, structured data, and production deployment." | Out-Null

  Add-Paragraph -Document $document -Text "FixHub  |  Final Integrative Project – UTN  |  Three-person team" -Size 9.4 -Bold $true -SpaceBefore 2 -SpaceAfter 2 -LineSpacing 11 | Out-Null
  Add-Bullet -Document $document -Text "Collaborated on a full-stack workshop management system; established the initial Spring Boot backend and repository structure and implemented the clients/equipment and work-order modules with automated tests." | Out-Null
  Add-Bullet -Document $document -Text "Standardized 401/403 responses, corrected frontend session and API-client behavior, managed pull-request integrations, and prepared Docker and TLS-verified Render-to-Railway deployment configuration." | Out-Null

  Add-Paragraph -Document $document -Text "VireonFit  |  Creator & Full-Stack Developer  |  Live" -Size 9.4 -Bold $true -SpaceBefore 2 -SpaceAfter 2 -LineSpacing 11 | Out-Null
  Add-Bullet -Document $document -Text "Built an AI-assisted training product with React, TypeScript, Vite, Tailwind CSS, Supabase authentication and persistence, backend functions, and deterministic weekly workout adjustments." | Out-Null

  Add-SectionHeading -Document $document -Text "EDUCATION & CERTIFICATIONS" | Out-Null
  Add-Paragraph -Document $document -Text "Universidad Tecnológica Nacional (UTN) — University Technical Degree in Programming, Feb 2025 – 2027 (in progress)" -Size 8.9 -SpaceAfter 2 -LineSpacing 10.6 | Out-Null
  Add-Paragraph -Document $document -Text "Teclab Instituto Técnico Superior — Técnico Superior en Programación, 2022 – Jun 2025 (completed)" -Size 8.9 -SpaceAfter 2 -LineSpacing 10.6 | Out-Null
  Add-Paragraph -Document $document -Text "freeCodeCamp — Machine Learning with Python; JavaScript Algorithms and Data Structures; Responsive Web Design" -Size 8.9 -SpaceAfter 2 -LineSpacing 10.6 | Out-Null

  Add-SectionHeading -Document $document -Text "LANGUAGES & ADDITIONAL INFORMATION" | Out-Null
  Add-Paragraph -Document $document -Text "Spanish: native  |  English: intermediate / upper-intermediate for technical reading and documentation  |  Polish citizenship and EU passport; eligible to work in the European Union" -Size 8.9 -SpaceAfter 0 -LineSpacing 10.6 | Out-Null

  Add-HyperlinkByText -Document $document -Label "damian.nogueira@outlook.com" -Url "mailto:damian.nogueira@outlook.com"
  Add-HyperlinkByText -Document $document -Label "LinkedIn" -Url "https://www.linkedin.com/in/damian-nogueira/"
  Add-HyperlinkByText -Document $document -Label "GitHub" -Url "https://github.com/damiannogueira"
  Add-HyperlinkByText -Document $document -Label "damiannogueira.com" -Url "https://damiannogueira.com/"

  $finalMarker = $document.Paragraphs.Item($document.Paragraphs.Count)
  if ([string]::IsNullOrWhiteSpace(($finalMarker.Range.Text -replace '[\r\a]', ''))) {
    $finalMarker.Range.Font.Size = 1
    $finalMarker.Range.Font.Hidden = 1
    $finalMarker.Format.SpaceBefore = 0
    $finalMarker.Format.SpaceAfter = 0
    $finalMarker.Format.LineSpacingRule = 4
    $finalMarker.Format.LineSpacing = 1
  }

  $document.SaveAs2($DocxPath, 16)
  $document.Repaginate()
  $document.ExportAsFixedFormat($PdfPath, 17)

  $pages = $document.ComputeStatistics(2)
  Write-Output "Generated DOCX: $DocxPath"
  Write-Output "Generated PDF: $PdfPath"
  Write-Output "Pages: $pages"
}
finally {
  if ($null -ne $document) {
    $document.Close(0)
    [System.Runtime.InteropServices.Marshal]::ReleaseComObject($document) | Out-Null
  }
  if ($null -ne $word) {
    $word.Quit()
    [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
  }
  [GC]::Collect()
  [GC]::WaitForPendingFinalizers()
}
