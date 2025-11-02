import { useRef } from "react";
import useJourneyAnimation from "./hooks/useJourneyAnimation";
import "mapbox-gl/dist/mapbox-gl.css";

const SAMPLE_GPX = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" version="1.1" creator="VisuGPX - https://www.visugpx.com">
  <metadata>
    <name>Montée Ventoux par Bédoin</name>
    <desc><![CDATA[1 ere Ascension en Vélo du Géant de Provence en 2017 ( 5 mai )]]></desc>
  </metadata>
  <trk>
    <name><![CDATA[Bédoin Cyclisme]]></name>
    <trkseg>
      <trkpt lat="44.12424" lon="5.1832">
        <ele>311.20001220703</ele>
        <time>2017-05-05T07:07:59.000Z</time>
      </trkpt>
      <trkpt lat="44.12407" lon="5.18317">
        <ele>310.60000610352</ele>
        <time>2017-05-05T07:08:06.000Z</time>
      </trkpt>
      <trkpt lat="44.12425" lon="5.18375">
        <ele>312.39999389648</ele>
        <time>2017-05-05T07:08:28.000Z</time>
      </trkpt>
      <trkpt lat="44.12442" lon="5.18433">
        <ele>313.60000610352</ele>
        <time>2017-05-05T07:08:45.000Z</time>
      </trkpt>
      <trkpt lat="44.12423" lon="5.18509">
        <ele>313.79998779297</ele>
        <time>2017-05-05T07:08:58.000Z</time>
      </trkpt>
      <trkpt lat="44.12412" lon="5.18565">
        <ele>314.20001220703</ele>
        <time>2017-05-05T07:09:07.000Z</time>
      </trkpt>
      <trkpt lat="44.12397" lon="5.18641">
        <ele>315</ele>
        <time>2017-05-05T07:09:19.000Z</time>
      </trkpt>
      <trkpt lat="44.12378" lon="5.18713">
        <ele>317.60000610352</ele>
        <time>2017-05-05T07:09:32.000Z</time>
      </trkpt>
      <trkpt lat="44.12363" lon="5.18788">
        <ele>322.39999389648</ele>
        <time>2017-05-05T07:09:46.000Z</time>
      </trkpt>
      <trkpt lat="44.12347" lon="5.18863">
        <ele>329.20001220703</ele>
        <time>2017-05-05T07:10:01.000Z</time>
      </trkpt>
      <trkpt lat="44.12313" lon="5.18923">
        <ele>332</ele>
        <time>2017-05-05T07:10:17.000Z</time>
      </trkpt>
      <trkpt lat="44.12262" lon="5.18961">
        <ele>333</ele>
        <time>2017-05-05T07:10:32.000Z</time>
      </trkpt>
      <trkpt lat="44.12214" lon="5.19004">
        <ele>332.79998779297</ele>
        <time>2017-05-05T07:10:47.000Z</time>
      </trkpt>
      <trkpt lat="44.12186" lon="5.19071">
        <ele>332.39999389648</ele>
        <time>2017-05-05T07:10:59.000Z</time>
      </trkpt>
      <trkpt lat="44.12156" lon="5.19141">
        <ele>332</ele>
        <time>2017-05-05T07:11:12.000Z</time>
      </trkpt>
      <trkpt lat="44.12131" lon="5.19206">
        <ele>333.39999389648</ele>
        <time>2017-05-05T07:11:24.000Z</time>
      </trkpt>
      <trkpt lat="44.1211" lon="5.19282">
        <ele>335.60000610352</ele>
        <time>2017-05-05T07:11:37.000Z</time>
      </trkpt>
      <trkpt lat="44.12091" lon="5.19358">
        <ele>336.60000610352</ele>
        <time>2017-05-05T07:11:50.000Z</time>
      </trkpt>
      <trkpt lat="44.1207" lon="5.19433">
        <ele>339</ele>
        <time>2017-05-05T07:12:03.000Z</time>
      </trkpt>
      <trkpt lat="44.12049" lon="5.19507">
        <ele>341.39999389648</ele>
        <time>2017-05-05T07:12:17.000Z</time>
      </trkpt>
      <trkpt lat="44.12023" lon="5.1958">
        <ele>344.20001220703</ele>
        <time>2017-05-05T07:12:31.000Z</time>
      </trkpt>
      <trkpt lat="44.11996" lon="5.19651">
        <ele>346.60000610352</ele>
        <time>2017-05-05T07:12:45.000Z</time>
      </trkpt>
      <trkpt lat="44.11963" lon="5.19716">
        <ele>349</ele>
        <time>2017-05-05T07:12:59.000Z</time>
      </trkpt>
      <trkpt lat="44.11932" lon="5.1978">
        <ele>350.39999389648</ele>
        <time>2017-05-05T07:13:13.000Z</time>
      </trkpt>
      <trkpt lat="44.11901" lon="5.19842">
        <ele>351.20001220703</ele>
        <time>2017-05-05T07:13:26.000Z</time>
      </trkpt>
      <trkpt lat="44.11869" lon="5.19908">
        <ele>354</ele>
        <time>2017-05-05T07:13:39.000Z</time>
      </trkpt>
      <trkpt lat="44.11845" lon="5.19981">
        <ele>356.20001220703</ele>
        <time>2017-05-05T07:13:54.000Z</time>
      </trkpt>
      <trkpt lat="44.11852" lon="5.20046">
        <ele>357.79998779297</ele>
        <time>2017-05-05T07:14:12.000Z</time>
      </trkpt>
      <trkpt lat="44.11904" lon="5.20077">
        <ele>359.60000610352</ele>
        <time>2017-05-05T07:14:29.000Z</time>
      </trkpt>
      <trkpt lat="44.1195" lon="5.20118">
        <ele>362</ele>
        <time>2017-05-05T07:14:45.000Z</time>
      </trkpt>
      <trkpt lat="44.11981" lon="5.20182">
        <ele>365</ele>
        <time>2017-05-05T07:15:02.000Z</time>
      </trkpt>
      <trkpt lat="44.11988" lon="5.20259">
        <ele>367.39999389648</ele>
        <time>2017-05-05T07:15:20.000Z</time>
      </trkpt>
      <trkpt lat="44.11996" lon="5.20337">
        <ele>371.60000610352</ele>
        <time>2017-05-05T07:15:38.000Z</time>
      </trkpt>
      <trkpt lat="44.12004" lon="5.20415">
        <ele>374.39999389648</ele>
        <time>2017-05-05T07:15:55.000Z</time>
      </trkpt>
      <trkpt lat="44.1201" lon="5.20489">
        <ele>376.20001220703</ele>
        <time>2017-05-05T07:16:11.000Z</time>
      </trkpt>
      <trkpt lat="44.12011" lon="5.20568">
        <ele>378</ele>
        <time>2017-05-05T07:16:28.000Z</time>
      </trkpt>
      <trkpt lat="44.12005" lon="5.20645">
        <ele>379</ele>
        <time>2017-05-05T07:16:45.000Z</time>
      </trkpt>
      <trkpt lat="44.11997" lon="5.20723">
        <ele>381.60000610352</ele>
        <time>2017-05-05T07:17:02.000Z</time>
      </trkpt>
      <trkpt lat="44.11992" lon="5.208">
        <ele>383.39999389648</ele>
        <time>2017-05-05T07:17:19.000Z</time>
      </trkpt>
      <trkpt lat="44.11984" lon="5.20878">
        <ele>385.39999389648</ele>
        <time>2017-05-05T07:17:36.000Z</time>
      </trkpt>
      <trkpt lat="44.11992" lon="5.20955">
        <ele>388</ele>
        <time>2017-05-05T07:17:53.000Z</time>
      </trkpt>
      <trkpt lat="44.12003" lon="5.21029">
        <ele>392.39999389648</ele>
        <time>2017-05-05T07:18:10.000Z</time>
      </trkpt>
      <trkpt lat="44.12015" lon="5.21105">
        <ele>397.79998779297</ele>
        <time>2017-05-05T07:18:28.000Z</time>
      </trkpt>
      <trkpt lat="44.12033" lon="5.21177">
        <ele>400.79998779297</ele>
        <time>2017-05-05T07:18:47.000Z</time>
      </trkpt>
      <trkpt lat="44.12066" lon="5.21241">
        <ele>403.20001220703</ele>
        <time>2017-05-05T07:19:05.000Z</time>
      </trkpt>
      <trkpt lat="44.12098" lon="5.21302">
        <ele>406</ele>
        <time>2017-05-05T07:19:22.000Z</time>
      </trkpt>
      <trkpt lat="44.12132" lon="5.21366">
        <ele>409.60000610352</ele>
        <time>2017-05-05T07:19:40.000Z</time>
      </trkpt>
      <trkpt lat="44.12165" lon="5.2143">
        <ele>413.79998779297</ele>
        <time>2017-05-05T07:19:59.000Z</time>
      </trkpt>
      <trkpt lat="44.12191" lon="5.21495">
        <ele>417.60000610352</ele>
        <time>2017-05-05T07:20:18.000Z</time>
      </trkpt>
      <trkpt lat="44.12213" lon="5.21567">
        <ele>420.79998779297</ele>
        <time>2017-05-05T07:20:37.000Z</time>
      </trkpt>
      <trkpt lat="44.12209" lon="5.21642">
        <ele>425.20001220703</ele>
        <time>2017-05-05T07:20:56.000Z</time>
      </trkpt>
      <trkpt lat="44.12188" lon="5.21714">
        <ele>430.39999389648</ele>
        <time>2017-05-05T07:21:16.000Z</time>
      </trkpt>
      <trkpt lat="44.12168" lon="5.21786">
        <ele>435.39999389648</ele>
        <time>2017-05-05T07:21:37.000Z</time>
      </trkpt>
      <trkpt lat="44.12147" lon="5.21859">
        <ele>439.79998779297</ele>
        <time>2017-05-05T07:21:57.000Z</time>
      </trkpt>
      <trkpt lat="44.12124" lon="5.2193">
        <ele>443.60000610352</ele>
        <time>2017-05-05T07:22:17.000Z</time>
      </trkpt>
      <trkpt lat="44.12101" lon="5.21998">
        <ele>445.79998779297</ele>
        <time>2017-05-05T07:22:37.000Z</time>
      </trkpt>
      <trkpt lat="44.12073" lon="5.22066">
        <ele>447.60000610352</ele>
        <time>2017-05-05T07:22:56.000Z</time>
      </trkpt>
      <trkpt lat="44.12051" lon="5.22135">
        <ele>450.20001220703</ele>
        <time>2017-05-05T07:23:15.000Z</time>
      </trkpt>
      <trkpt lat="44.1203" lon="5.22207">
        <ele>454.79998779297</ele>
        <time>2017-05-05T07:23:33.000Z</time>
      </trkpt>
      <trkpt lat="44.1202" lon="5.22282">
        <ele>455.20001220703</ele>
        <time>2017-05-05T07:23:51.000Z</time>
      </trkpt>
      <trkpt lat="44.12035" lon="5.22355">
        <ele>458</ele>
        <time>2017-05-05T07:24:09.000Z</time>
      </trkpt>
      <trkpt lat="44.12045" lon="5.2243">
        <ele>461.39999389648</ele>
        <time>2017-05-05T07:24:27.000Z</time>
      </trkpt>
      <trkpt lat="44.12041" lon="5.22508">
        <ele>464.60000610352</ele>
        <time>2017-05-05T07:24:46.000Z</time>
      </trkpt>
      <trkpt lat="44.12032" lon="5.22582">
        <ele>468.79998779297</ele>
        <time>2017-05-05T07:25:05.000Z</time>
      </trkpt>
      <trkpt lat="44.12023" lon="5.22657">
        <ele>473.60000610352</ele>
        <time>2017-05-05T07:25:24.000Z</time>
      </trkpt>
      <trkpt lat="44.12016" lon="5.22732">
        <ele>476</ele>
        <time>2017-05-05T07:25:44.000Z</time>
      </trkpt>
      <trkpt lat="44.12021" lon="5.22809">
        <ele>476.60000610352</ele>
        <time>2017-05-05T07:26:05.000Z</time>
      </trkpt>
      <trkpt lat="44.12032" lon="5.22886">
        <ele>480.20001220703</ele>
        <time>2017-05-05T07:26:27.000Z</time>
      </trkpt>
      <trkpt lat="44.12041" lon="5.2296">
        <ele>489</ele>
        <time>2017-05-05T07:26:48.000Z</time>
      </trkpt>
      <trkpt lat="44.12045" lon="5.23037">
        <ele>497.79998779297</ele>
        <time>2017-05-05T07:27:09.000Z</time>
      </trkpt>
      <trkpt lat="44.1201" lon="5.23096">
        <ele>501</ele>
        <time>2017-05-05T07:27:29.000Z</time>
      </trkpt>
      <trkpt lat="44.11969" lon="5.23152">
        <ele>503.39999389648</ele>
        <time>2017-05-05T07:27:49.000Z</time>
      </trkpt>
      <trkpt lat="44.11929" lon="5.23206">
        <ele>506.20001220703</ele>
        <time>2017-05-05T07:28:08.000Z</time>
      </trkpt>
      <trkpt lat="44.11888" lon="5.23259">
        <ele>510.60000610352</ele>
        <time>2017-05-05T07:28:27.000Z</time>
      </trkpt>
      <trkpt lat="44.1185" lon="5.23313">
        <ele>513.59997558594</ele>
        <time>2017-05-05T07:28:46.000Z</time>
      </trkpt>
      <trkpt lat="44.11811" lon="5.23367">
        <ele>512.59997558594</ele>
        <time>2017-05-05T07:29:05.000Z</time>
      </trkpt>
      <trkpt lat="44.11786" lon="5.23437">
        <ele>513.59997558594</ele>
        <time>2017-05-05T07:29:24.000Z</time>
      </trkpt>
      <trkpt lat="44.11756" lon="5.23501">
        <ele>512.59997558594</ele>
        <time>2017-05-05T07:29:40.000Z</time>
      </trkpt>
      <trkpt lat="44.11738" lon="5.23569">
        <ele>511.79998779297</ele>
        <time>2017-05-05T07:29:56.000Z</time>
      </trkpt>
      <trkpt lat="44.11746" lon="5.23643">
        <ele>517.79998779297</ele>
        <time>2017-05-05T07:30:12.000Z</time>
      </trkpt>
      <trkpt lat="44.11742" lon="5.23721">
        <ele>522.20001220703</ele>
        <time>2017-05-05T07:30:29.000Z</time>
      </trkpt>
      <trkpt lat="44.11732" lon="5.23796">
        <ele>529.59997558594</ele>
        <time>2017-05-05T07:30:46.000Z</time>
      </trkpt>
      <trkpt lat="44.11726" lon="5.23821">
        <ele>532</ele>
        <time>2017-05-05T07:30:52.000Z</time>
      </trkpt>
      <trkpt lat="44.11686" lon="5.23878">
        <ele>530.79998779297</ele>
        <time>2017-05-05T07:31:10.000Z</time>
      </trkpt>
      <trkpt lat="44.11646" lon="5.23929">
        <ele>533.59997558594</ele>
        <time>2017-05-05T07:31:26.000Z</time>
      </trkpt>
      <trkpt lat="44.11606" lon="5.2398">
        <ele>534</ele>
        <time>2017-05-05T07:31:40.000Z</time>
      </trkpt>
      <trkpt lat="44.11558" lon="5.24017">
        <ele>540.20001220703</ele>
        <time>2017-05-05T07:31:54.000Z</time>
      </trkpt>
      <trkpt lat="44.11501" lon="5.24024">
        <ele>547</ele>
        <time>2017-05-05T07:32:09.000Z</time>
      </trkpt>
      <trkpt lat="44.11451" lon="5.23996">
        <ele>547.20001220703</ele>
        <time>2017-05-05T07:32:26.000Z</time>
      </trkpt>
      <trkpt lat="44.114" lon="5.23966">
        <ele>544.20001220703</ele>
        <time>2017-05-05T07:32:42.000Z</time>
      </trkpt>
      <trkpt lat="44.11347" lon="5.23967">
        <ele>545</ele>
        <time>2017-05-05T07:33:00.000Z</time>
      </trkpt>
      <trkpt lat="44.11344" lon="5.23982">
        <ele>546.59997558594</ele>
        <time>2017-05-05T07:33:04.000Z</time>
      </trkpt>
      <trkpt lat="44.11395" lon="5.24015">
        <ele>552</ele>
        <time>2017-05-05T07:33:24.000Z</time>
      </trkpt>
      <trkpt lat="44.11436" lon="5.24068">
        <ele>560.40002441406</ele>
        <time>2017-05-05T07:33:46.000Z</time>
      </trkpt>
      <trkpt lat="44.11474" lon="5.24122">
        <ele>569</ele>
        <time>2017-05-05T07:34:09.000Z</time>
      </trkpt>
      <trkpt lat="44.11516" lon="5.24173">
        <ele>577.59997558594</ele>
        <time>2017-05-05T07:34:32.000Z</time>
      </trkpt>
      <trkpt lat="44.11566" lon="5.24207">
        <ele>579.79998779297</ele>
        <time>2017-05-05T07:34:56.000Z</time>
      </trkpt>
      <trkpt lat="44.11609" lon="5.24254">
        <ele>581.59997558594</ele>
        <time>2017-05-05T07:35:20.000Z</time>
      </trkpt>
      <trkpt lat="44.11582" lon="5.24316">
        <ele>590</ele>
        <time>2017-05-05T07:35:44.000Z</time>
      </trkpt>
      <trkpt lat="44.11548" lon="5.24377">
        <ele>595.59997558594</ele>
        <time>2017-05-05T07:36:09.000Z</time>
      </trkpt>
      <trkpt lat="44.11552" lon="5.24446">
        <ele>603</ele>
        <time>2017-05-05T07:36:32.000Z</time>
      </trkpt>
      <trkpt lat="44.11595" lon="5.24494">
        <ele>608.40002441406</ele>
        <time>2017-05-05T07:36:55.000Z</time>
      </trkpt>
      <trkpt lat="44.11638" lon="5.24542">
        <ele>615</ele>
        <time>2017-05-05T07:37:18.000Z</time>
      </trkpt>
      <trkpt lat="44.11681" lon="5.2459">
        <ele>622</ele>
        <time>2017-05-05T07:37:42.000Z</time>
      </trkpt>
      <trkpt lat="44.11725" lon="5.24639">
        <ele>628.40002441406</ele>
        <time>2017-05-05T07:38:06.000Z</time>
      </trkpt>
      <trkpt lat="44.11768" lon="5.24689">
        <ele>634.79998779297</ele>
        <time>2017-05-05T07:38:31.000Z</time>
      </trkpt>
      <trkpt lat="44.11816" lon="5.24727">
        <ele>641.40002441406</ele>
        <time>2017-05-05T07:38:56.000Z</time>
      </trkpt>
      <trkpt lat="44.11861" lon="5.24766">
        <ele>649</ele>
        <time>2017-05-05T07:39:20.000Z</time>
      </trkpt>
      <trkpt lat="44.1191" lon="5.24797">
        <ele>655.40002441406</ele>
        <time>2017-05-05T07:39:45.000Z</time>
      </trkpt>
      <trkpt lat="44.1196" lon="5.24816">
        <ele>660.79998779297</ele>
        <time>2017-05-05T07:40:10.000Z</time>
      </trkpt>
      <trkpt lat="44.12008" lon="5.24851">
        <ele>670.79998779297</ele>
        <time>2017-05-05T07:40:34.000Z</time>
      </trkpt>
      <trkpt lat="44.12061" lon="5.24866">
        <ele>676.79998779297</ele>
        <time>2017-05-05T07:40:58.000Z</time>
      </trkpt>
      <trkpt lat="44.12112" lon="5.24881">
        <ele>682.40002441406</ele>
        <time>2017-05-05T07:41:23.000Z</time>
      </trkpt>
      <trkpt lat="44.12131" lon="5.24931">
        <ele>692.20001220703</ele>
        <time>2017-05-05T07:41:40.000Z</time>
      </trkpt>
      <trkpt lat="44.12182" lon="5.24912">
        <ele>690.59997558594</ele>
        <time>2017-05-05T07:42:05.000Z</time>
      </trkpt>
      <trkpt lat="44.12228" lon="5.24942">
        <ele>697</ele>
        <time>2017-05-05T07:42:29.000Z</time>
      </trkpt>
      <trkpt lat="44.12262" lon="5.25003">
        <ele>707.79998779297</ele>
        <time>2017-05-05T07:42:54.000Z</time>
      </trkpt>
      <trkpt lat="44.12297" lon="5.25062">
        <ele>715.20001220703</ele>
        <time>2017-05-05T07:43:22.000Z</time>
      </trkpt>
      <trkpt lat="44.12334" lon="5.25116">
        <ele>719.20001220703</ele>
        <time>2017-05-05T07:43:44.000Z</time>
      </trkpt>
      <trkpt lat="44.12367" lon="5.25179">
        <ele>726.20001220703</ele>
        <time>2017-05-05T07:44:11.000Z</time>
      </trkpt>
      <trkpt lat="44.12403" lon="5.25234">
        <ele>731.20001220703</ele>
        <time>2017-05-05T07:44:36.000Z</time>
      </trkpt>
      <trkpt lat="44.12437" lon="5.25293">
        <ele>734.79998779297</ele>
        <time>2017-05-05T07:45:02.000Z</time>
      </trkpt>
      <trkpt lat="44.12464" lon="5.25358">
        <ele>742</ele>
        <time>2017-05-05T07:45:27.000Z</time>
      </trkpt>
      <trkpt lat="44.12462" lon="5.25433">
        <ele>749.59997558594</ele>
        <time>2017-05-05T07:45:53.000Z</time>
      </trkpt>
      <trkpt lat="44.12463" lon="5.2551">
        <ele>756.20001220703</ele>
        <time>2017-05-05T07:46:20.000Z</time>
      </trkpt>
      <trkpt lat="44.1247" lon="5.25587">
        <ele>760.79998779297</ele>
        <time>2017-05-05T07:46:47.000Z</time>
      </trkpt>
      <trkpt lat="44.12485" lon="5.25662">
        <ele>764.59997558594</ele>
        <time>2017-05-05T07:47:14.000Z</time>
      </trkpt>
      <trkpt lat="44.12506" lon="5.25733">
        <ele>768</ele>
        <time>2017-05-05T07:47:40.000Z</time>
      </trkpt>
      <trkpt lat="44.12511" lon="5.25809">
        <ele>773.59997558594</ele>
        <time>2017-05-05T07:48:06.000Z</time>
      </trkpt>
      <trkpt lat="44.12476" lon="5.25867">
        <ele>781.40002441406</ele>
        <time>2017-05-05T07:48:36.000Z</time>
      </trkpt>
      <trkpt lat="44.12441" lon="5.25923">
        <ele>784.79998779297</ele>
        <time>2017-05-05T07:49:02.000Z</time>
      </trkpt>
      <trkpt lat="44.12438" lon="5.25998">
        <ele>788.59997558594</ele>
        <time>2017-05-05T07:49:27.000Z</time>
      </trkpt>
      <trkpt lat="44.12432" lon="5.26074">
        <ele>797.79998779297</ele>
        <time>2017-05-05T07:49:55.000Z</time>
      </trkpt>
      <trkpt lat="44.12453" lon="5.26144">
        <ele>802.40002441406</ele>
        <time>2017-05-05T07:50:22.000Z</time>
      </trkpt>
      <trkpt lat="44.1245" lon="5.26222">
        <ele>808.40002441406</ele>
        <time>2017-05-05T07:50:50.000Z</time>
      </trkpt>
      <trkpt lat="44.12433" lon="5.26295">
        <ele>812.20001220703</ele>
        <time>2017-05-05T07:51:18.000Z</time>
      </trkpt>
      <trkpt lat="44.12426" lon="5.26371">
        <ele>818.20001220703</ele>
        <time>2017-05-05T07:51:46.000Z</time>
      </trkpt>
      <trkpt lat="44.12402" lon="5.26439">
        <ele>825.40002441406</ele>
        <time>2017-05-05T07:52:14.000Z</time>
      </trkpt>
      <trkpt lat="44.12407" lon="5.26514">
        <ele>833.20001220703</ele>
        <time>2017-05-05T07:52:41.000Z</time>
      </trkpt>
      <trkpt lat="44.1243" lon="5.26583">
        <ele>841.79998779297</ele>
        <time>2017-05-05T07:53:10.000Z</time>
      </trkpt>
      <trkpt lat="44.12473" lon="5.26632">
        <ele>848</ele>
        <time>2017-05-05T07:53:42.000Z</time>
      </trkpt>
      <trkpt lat="44.12498" lon="5.26698">
        <ele>855</ele>
        <time>2017-05-05T07:54:10.000Z</time>
      </trkpt>
      <trkpt lat="44.12525" lon="5.26763">
        <ele>864.20001220703</ele>
        <time>2017-05-05T07:55:01.000Z</time>
      </trkpt>
      <trkpt lat="44.12527" lon="5.26767">
        <ele>864.59997558594</ele>
        <time>2017-05-05T07:55:08.000Z</time>
      </trkpt>
      <trkpt lat="44.12559" lon="5.26828">
        <ele>870</ele>
        <time>2017-05-05T07:55:40.000Z</time>
      </trkpt>
      <trkpt lat="44.12583" lon="5.26896">
        <ele>876</ele>
        <time>2017-05-05T07:56:09.000Z</time>
      </trkpt>
      <trkpt lat="44.12609" lon="5.26965">
        <ele>880.40002441406</ele>
        <time>2017-05-05T07:56:37.000Z</time>
      </trkpt>
      <trkpt lat="44.12624" lon="5.27039">
        <ele>890.40002441406</ele>
        <time>2017-05-05T07:57:05.000Z</time>
      </trkpt>
      <trkpt lat="44.12648" lon="5.27109">
        <ele>894.79998779297</ele>
        <time>2017-05-05T07:57:35.000Z</time>
      </trkpt>
      <trkpt lat="44.12659" lon="5.27184">
        <ele>899.40002441406</ele>
        <time>2017-05-05T07:58:02.000Z</time>
      </trkpt>
      <trkpt lat="44.12662" lon="5.27261">
        <ele>905.59997558594</ele>
        <time>2017-05-05T07:58:29.000Z</time>
      </trkpt>
      <trkpt lat="44.12659" lon="5.27338">
        <ele>913.40002441406</ele>
        <time>2017-05-05T07:58:57.000Z</time>
      </trkpt>
      <trkpt lat="44.12637" lon="5.27406">
        <ele>921</ele>
        <time>2017-05-05T07:59:24.000Z</time>
      </trkpt>
      <trkpt lat="44.12612" lon="5.27474">
        <ele>920.59997558594</ele>
        <time>2017-05-05T07:59:51.000Z</time>
      </trkpt>
      <trkpt lat="44.12588" lon="5.27541">
        <ele>927.79998779297</ele>
        <time>2017-05-05T08:00:18.000Z</time>
      </trkpt>
      <trkpt lat="44.12569" lon="5.27612">
        <ele>935.59997558594</ele>
        <time>2017-05-05T08:00:45.000Z</time>
      </trkpt>
      <trkpt lat="44.12584" lon="5.27684">
        <ele>938.40002441406</ele>
        <time>2017-05-05T08:01:10.000Z</time>
      </trkpt>
      <trkpt lat="44.12601" lon="5.27757">
        <ele>944.20001220703</ele>
        <time>2017-05-05T08:01:36.000Z</time>
      </trkpt>
      <trkpt lat="44.1262" lon="5.2783">
        <ele>952</ele>
        <time>2017-05-05T08:02:01.000Z</time>
      </trkpt>
      <trkpt lat="44.12652" lon="5.27891">
        <ele>956</ele>
        <time>2017-05-05T08:02:28.000Z</time>
      </trkpt>
      <trkpt lat="44.12654" lon="5.27967">
        <ele>961.79998779297</ele>
        <time>2017-05-05T08:02:53.000Z</time>
      </trkpt>
      <trkpt lat="44.12656" lon="5.28044">
        <ele>969.59997558594</ele>
        <time>2017-05-05T08:03:19.000Z</time>
      </trkpt>
      <trkpt lat="44.12674" lon="5.28116">
        <ele>972.20001220703</ele>
        <time>2017-05-05T08:03:45.000Z</time>
      </trkpt>
      <trkpt lat="44.12697" lon="5.28184">
        <ele>975.59997558594</ele>
        <time>2017-05-05T08:04:11.000Z</time>
      </trkpt>
      <trkpt lat="44.12696" lon="5.2826">
        <ele>983.20001220703</ele>
        <time>2017-05-05T08:04:38.000Z</time>
      </trkpt>
      <trkpt lat="44.12694" lon="5.28334">
        <ele>988.59997558594</ele>
        <time>2017-05-05T08:05:05.000Z</time>
      </trkpt>
      <trkpt lat="44.12712" lon="5.28367">
        <ele>990</ele>
        <time>2017-05-05T08:05:20.000Z</time>
      </trkpt>
      <trkpt lat="44.12765" lon="5.28373">
        <ele>987.20001220703</ele>
        <time>2017-05-05T08:05:48.000Z</time>
      </trkpt>
      <trkpt lat="44.12818" lon="5.2837">
        <ele>988.59997558594</ele>
        <time>2017-05-05T08:06:15.000Z</time>
      </trkpt>
      <trkpt lat="44.12871" lon="5.28381">
        <ele>993.59997558594</ele>
        <time>2017-05-05T08:06:42.000Z</time>
      </trkpt>
      <trkpt lat="44.12868" lon="5.28393">
        <ele>994</ele>
        <time>2017-05-05T08:06:47.000Z</time>
      </trkpt>
      <trkpt lat="44.12846" lon="5.28446">
        <ele>996</ele>
        <time>2017-05-05T08:07:10.000Z</time>
      </trkpt>
      <trkpt lat="44.1288" lon="5.28507">
        <ele>1004.200012207</ele>
        <time>2017-05-05T08:07:35.000Z</time>
      </trkpt>
      <trkpt lat="44.12891" lon="5.28583">
        <ele>1010.799987793</ele>
        <time>2017-05-05T08:08:02.000Z</time>
      </trkpt>
      <trkpt lat="44.12912" lon="5.28649">
        <ele>1016</ele>
        <time>2017-05-05T08:08:29.000Z</time>
      </trkpt>
      <trkpt lat="44.12943" lon="5.28712">
        <ele>1021</ele>
        <time>2017-05-05T08:08:57.000Z</time>
      </trkpt>
      <trkpt lat="44.12958" lon="5.28781">
        <ele>1025.8000488281</ele>
        <time>2017-05-05T08:09:24.000Z</time>
      </trkpt>
      <trkpt lat="44.12959" lon="5.28812">
        <ele>1027.5999755859</ele>
        <time>2017-05-05T08:11:09.000Z</time>
      </trkpt>
      <trkpt lat="44.13003" lon="5.28856">
        <ele>1035</ele>
        <time>2017-05-05T08:11:39.000Z</time>
      </trkpt>
      <trkpt lat="44.13049" lon="5.28897">
        <ele>1042</ele>
        <time>2017-05-05T08:12:06.000Z</time>
      </trkpt>
      <trkpt lat="44.13078" lon="5.28963">
        <ele>1049.1999511719</ele>
        <time>2017-05-05T08:12:32.000Z</time>
      </trkpt>
      <trkpt lat="44.13097" lon="5.29034">
        <ele>1056.8000488281</ele>
        <time>2017-05-05T08:12:58.000Z</time>
      </trkpt>
      <trkpt lat="44.13129" lon="5.29096">
        <ele>1064.8000488281</ele>
        <time>2017-05-05T08:13:27.000Z</time>
      </trkpt>
      <trkpt lat="44.13163" lon="5.29157">
        <ele>1072</ele>
        <time>2017-05-05T08:13:54.000Z</time>
      </trkpt>
      <trkpt lat="44.13187" lon="5.29226">
        <ele>1079</ele>
        <time>2017-05-05T08:14:21.000Z</time>
      </trkpt>
      <trkpt lat="44.13212" lon="5.29294">
        <ele>1087.5999755859</ele>
        <time>2017-05-05T08:14:49.000Z</time>
      </trkpt>
      <trkpt lat="44.13242" lon="5.29359">
        <ele>1096.8000488281</ele>
        <time>2017-05-05T08:15:17.000Z</time>
      </trkpt>
      <trkpt lat="44.13273" lon="5.29423">
        <ele>1106.5999755859</ele>
        <time>2017-05-05T08:15:43.000Z</time>
      </trkpt>
      <trkpt lat="44.1331" lon="5.29481">
        <ele>1113.8000488281</ele>
        <time>2017-05-05T08:16:10.000Z</time>
      </trkpt>
      <trkpt lat="44.13342" lon="5.29541">
        <ele>1119.8000488281</ele>
        <time>2017-05-05T08:16:35.000Z</time>
      </trkpt>
      <trkpt lat="44.13373" lon="5.29605">
        <ele>1126.1999511719</ele>
        <time>2017-05-05T08:17:01.000Z</time>
      </trkpt>
      <trkpt lat="44.13404" lon="5.29666">
        <ele>1130.4000244141</ele>
        <time>2017-05-05T08:17:28.000Z</time>
      </trkpt>
      <trkpt lat="44.13431" lon="5.29731">
        <ele>1136</ele>
        <time>2017-05-05T08:17:54.000Z</time>
      </trkpt>
      <trkpt lat="44.1345" lon="5.29803">
        <ele>1143.1999511719</ele>
        <time>2017-05-05T08:18:21.000Z</time>
      </trkpt>
      <trkpt lat="44.1346" lon="5.29877">
        <ele>1150.5999755859</ele>
        <time>2017-05-05T08:18:48.000Z</time>
      </trkpt>
      <trkpt lat="44.13469" lon="5.29954">
        <ele>1157.1999511719</ele>
        <time>2017-05-05T08:19:16.000Z</time>
      </trkpt>
      <trkpt lat="44.13472" lon="5.3003">
        <ele>1162.8000488281</ele>
        <time>2017-05-05T08:19:42.000Z</time>
      </trkpt>
      <trkpt lat="44.13485" lon="5.30104">
        <ele>1168</ele>
        <time>2017-05-05T08:20:07.000Z</time>
      </trkpt>
      <trkpt lat="44.13517" lon="5.30167">
        <ele>1170.5999755859</ele>
        <time>2017-05-05T08:20:35.000Z</time>
      </trkpt>
      <trkpt lat="44.13551" lon="5.30227">
        <ele>1175.8000488281</ele>
        <time>2017-05-05T08:21:03.000Z</time>
      </trkpt>
      <trkpt lat="44.13583" lon="5.3029">
        <ele>1182</ele>
        <time>2017-05-05T08:21:29.000Z</time>
      </trkpt>
      <trkpt lat="44.1358" lon="5.30366">
        <ele>1188</ele>
        <time>2017-05-05T08:21:58.000Z</time>
      </trkpt>
      <trkpt lat="44.1357" lon="5.3044">
        <ele>1193.5999755859</ele>
        <time>2017-05-05T08:22:26.000Z</time>
      </trkpt>
      <trkpt lat="44.13553" lon="5.30513">
        <ele>1195</ele>
        <time>2017-05-05T08:22:50.000Z</time>
      </trkpt>
      <trkpt lat="44.13546" lon="5.30587">
        <ele>1195.5999755859</ele>
        <time>2017-05-05T08:23:17.000Z</time>
      </trkpt>
      <trkpt lat="44.13564" lon="5.30659">
        <ele>1200.4000244141</ele>
        <time>2017-05-05T08:23:43.000Z</time>
      </trkpt>
      <trkpt lat="44.13592" lon="5.30724">
        <ele>1207.1999511719</ele>
        <time>2017-05-05T08:24:12.000Z</time>
      </trkpt>
      <trkpt lat="44.13632" lon="5.30776">
        <ele>1215.5999755859</ele>
        <time>2017-05-05T08:24:39.000Z</time>
      </trkpt>
      <trkpt lat="44.13672" lon="5.3083">
        <ele>1223.5999755859</ele>
        <time>2017-05-05T08:25:07.000Z</time>
      </trkpt>
      <trkpt lat="44.13711" lon="5.30885">
        <ele>1230</ele>
        <time>2017-05-05T08:25:32.000Z</time>
      </trkpt>
      <trkpt lat="44.13751" lon="5.3094">
        <ele>1233</ele>
        <time>2017-05-05T08:25:57.000Z</time>
      </trkpt>
      <trkpt lat="44.13779" lon="5.31006">
        <ele>1239.5999755859</ele>
        <time>2017-05-05T08:26:23.000Z</time>
      </trkpt>
      <trkpt lat="44.13806" lon="5.31072">
        <ele>1246.4000244141</ele>
        <time>2017-05-05T08:26:49.000Z</time>
      </trkpt>
      <trkpt lat="44.13812" lon="5.31145">
        <ele>1252.8000488281</ele>
        <time>2017-05-05T08:27:16.000Z</time>
      </trkpt>
      <trkpt lat="44.13824" lon="5.3122">
        <ele>1258.1999511719</ele>
        <time>2017-05-05T08:27:43.000Z</time>
      </trkpt>
      <trkpt lat="44.1384" lon="5.31292">
        <ele>1263.8000488281</ele>
        <time>2017-05-05T08:28:10.000Z</time>
      </trkpt>
      <trkpt lat="44.13852" lon="5.31367">
        <ele>1272.8000488281</ele>
        <time>2017-05-05T08:28:38.000Z</time>
      </trkpt>
      <trkpt lat="44.13876" lon="5.31435">
        <ele>1278.8000488281</ele>
        <time>2017-05-05T08:29:05.000Z</time>
      </trkpt>
      <trkpt lat="44.13906" lon="5.31498">
        <ele>1283</ele>
        <time>2017-05-05T08:29:33.000Z</time>
      </trkpt>
      <trkpt lat="44.13943" lon="5.31555">
        <ele>1285.4000244141</ele>
        <time>2017-05-05T08:30:03.000Z</time>
      </trkpt>
      <trkpt lat="44.13981" lon="5.3161">
        <ele>1288.4000244141</ele>
        <time>2017-05-05T08:30:31.000Z</time>
      </trkpt>
      <trkpt lat="44.1402" lon="5.31664">
        <ele>1293.4000244141</ele>
        <time>2017-05-05T08:30:59.000Z</time>
      </trkpt>
      <trkpt lat="44.14057" lon="5.31719">
        <ele>1300.1999511719</ele>
        <time>2017-05-05T08:31:27.000Z</time>
      </trkpt>
      <trkpt lat="44.14097" lon="5.31774">
        <ele>1305.5999755859</ele>
        <time>2017-05-05T08:31:54.000Z</time>
      </trkpt>
      <trkpt lat="44.1414" lon="5.31819">
        <ele>1311</ele>
        <time>2017-05-05T08:32:21.000Z</time>
      </trkpt>
      <trkpt lat="44.1419" lon="5.31843">
        <ele>1314</ele>
        <time>2017-05-05T08:32:50.000Z</time>
      </trkpt>
      <trkpt lat="44.14243" lon="5.31847">
        <ele>1317.5999755859</ele>
        <time>2017-05-05T08:33:15.000Z</time>
      </trkpt>
      <trkpt lat="44.14295" lon="5.3185">
        <ele>1323.5999755859</ele>
        <time>2017-05-05T08:33:41.000Z</time>
      </trkpt>
      <trkpt lat="44.14343" lon="5.31813">
        <ele>1327.5999755859</ele>
        <time>2017-05-05T08:34:08.000Z</time>
      </trkpt>
      <trkpt lat="44.14387" lon="5.31766">
        <ele>1335.5999755859</ele>
        <time>2017-05-05T08:34:35.000Z</time>
      </trkpt>
      <trkpt lat="44.1444" lon="5.31746">
        <ele>1344.1999511719</ele>
        <time>2017-05-05T08:35:00.000Z</time>
      </trkpt>
      <trkpt lat="44.14496" lon="5.31749">
        <ele>1352.8000488281</ele>
        <time>2017-05-05T08:35:27.000Z</time>
      </trkpt>
      <trkpt lat="44.14551" lon="5.31762">
        <ele>1359.8000488281</ele>
        <time>2017-05-05T08:35:54.000Z</time>
      </trkpt>
      <trkpt lat="44.14592" lon="5.31753">
        <ele>1361.5999755859</ele>
        <time>2017-05-05T08:36:20.000Z</time>
      </trkpt>
      <trkpt lat="44.14557" lon="5.31696">
        <ele>1354.5999755859</ele>
        <time>2017-05-05T08:36:42.000Z</time>
      </trkpt>
      <trkpt lat="44.14554" lon="5.31627">
        <ele>1359</ele>
        <time>2017-05-05T08:37:05.000Z</time>
      </trkpt>
      <trkpt lat="44.1459" lon="5.31567">
        <ele>1366</ele>
        <time>2017-05-05T08:37:27.000Z</time>
      </trkpt>
      <trkpt lat="44.14633" lon="5.31528">
        <ele>1369.8000488281</ele>
        <time>2017-05-05T08:37:49.000Z</time>
      </trkpt>
      <trkpt lat="44.14687" lon="5.31543">
        <ele>1377</ele>
        <time>2017-05-05T08:38:13.000Z</time>
      </trkpt>
      <trkpt lat="44.14733" lon="5.31582">
        <ele>1383.1999511719</ele>
        <time>2017-05-05T08:38:36.000Z</time>
      </trkpt>
      <trkpt lat="44.14782" lon="5.31612">
        <ele>1388.1999511719</ele>
        <time>2017-05-05T08:39:00.000Z</time>
      </trkpt>
      <trkpt lat="44.14833" lon="5.31638">
        <ele>1395.4000244141</ele>
        <time>2017-05-05T08:39:23.000Z</time>
      </trkpt>
      <trkpt lat="44.14883" lon="5.31669">
        <ele>1402</ele>
        <time>2017-05-05T08:39:46.000Z</time>
      </trkpt>
      <trkpt lat="44.14932" lon="5.31702">
        <ele>1408.1999511719</ele>
        <time>2017-05-05T08:40:10.000Z</time>
      </trkpt>
      <trkpt lat="44.1498" lon="5.31738">
        <ele>1415</ele>
        <time>2017-05-05T08:40:34.000Z</time>
      </trkpt>
      <trkpt lat="44.15032" lon="5.31762">
        <ele>1419.4000244141</ele>
        <time>2017-05-05T08:40:57.000Z</time>
      </trkpt>
      <trkpt lat="44.15085" lon="5.31786">
        <ele>1422.8000488281</ele>
        <time>2017-05-05T08:41:20.000Z</time>
      </trkpt>
      <trkpt lat="44.15132" lon="5.31828">
        <ele>1428.4000244141</ele>
        <time>2017-05-05T08:41:43.000Z</time>
      </trkpt>
      <trkpt lat="44.15176" lon="5.31874">
        <ele>1434</ele>
        <time>2017-05-05T08:42:06.000Z</time>
      </trkpt>
      <trkpt lat="44.15215" lon="5.31886">
        <ele>1433.5999755859</ele>
        <time>2017-05-05T08:43:19.000Z</time>
      </trkpt>
      <trkpt lat="44.15217" lon="5.31881">
        <ele>1433</ele>
        <time>2017-05-05T08:43:21.000Z</time>
      </trkpt>
      <trkpt lat="44.15217" lon="5.31812">
        <ele>1423.1999511719</ele>
        <time>2017-05-05T08:43:45.000Z</time>
      </trkpt>
      <trkpt lat="44.15196" lon="5.31742">
        <ele>1419</ele>
        <time>2017-05-05T08:44:08.000Z</time>
      </trkpt>
      <trkpt lat="44.1517" lon="5.31677">
        <ele>1416.1999511719</ele>
        <time>2017-05-05T08:44:30.000Z</time>
      </trkpt>
      <trkpt lat="44.15146" lon="5.31606">
        <ele>1421</ele>
        <time>2017-05-05T08:44:53.000Z</time>
      </trkpt>
      <trkpt lat="44.15126" lon="5.31535">
        <ele>1426.4000244141</ele>
        <time>2017-05-05T08:45:16.000Z</time>
      </trkpt>
      <trkpt lat="44.15101" lon="5.31467">
        <ele>1431</ele>
        <time>2017-05-05T08:45:38.000Z</time>
      </trkpt>
      <trkpt lat="44.151" lon="5.31398">
        <ele>1441.4000244141</ele>
        <time>2017-05-05T08:46:00.000Z</time>
      </trkpt>
      <trkpt lat="44.15146" lon="5.31358">
        <ele>1451.5999755859</ele>
        <time>2017-05-05T08:46:22.000Z</time>
      </trkpt>
      <trkpt lat="44.152" lon="5.31358">
        <ele>1458</ele>
        <time>2017-05-05T08:46:46.000Z</time>
      </trkpt>
      <trkpt lat="44.15253" lon="5.31381">
        <ele>1463.5999755859</ele>
        <time>2017-05-05T08:47:10.000Z</time>
      </trkpt>
      <trkpt lat="44.15296" lon="5.3143">
        <ele>1468.1999511719</ele>
        <time>2017-05-05T08:47:34.000Z</time>
      </trkpt>
      <trkpt lat="44.15345" lon="5.31462">
        <ele>1474.1999511719</ele>
        <time>2017-05-05T08:47:58.000Z</time>
      </trkpt>
      <trkpt lat="44.15396" lon="5.31492">
        <ele>1481.4000244141</ele>
        <time>2017-05-05T08:48:21.000Z</time>
      </trkpt>
      <trkpt lat="44.15445" lon="5.31528">
        <ele>1488.5999755859</ele>
        <time>2017-05-05T08:48:45.000Z</time>
      </trkpt>
      <trkpt lat="44.15496" lon="5.31546">
        <ele>1495.8000488281</ele>
        <time>2017-05-05T08:49:08.000Z</time>
      </trkpt>
      <trkpt lat="44.15483" lon="5.31479">
        <ele>1486.4000244141</ele>
        <time>2017-05-05T08:49:27.000Z</time>
      </trkpt>
      <trkpt lat="44.15482" lon="5.31403">
        <ele>1482</ele>
        <time>2017-05-05T08:49:49.000Z</time>
      </trkpt>
      <trkpt lat="44.15487" lon="5.31327">
        <ele>1486.8000488281</ele>
        <time>2017-05-05T08:50:11.000Z</time>
      </trkpt>
      <trkpt lat="44.15496" lon="5.31253">
        <ele>1491.4000244141</ele>
        <time>2017-05-05T08:50:33.000Z</time>
      </trkpt>
      <trkpt lat="44.15542" lon="5.31223">
        <ele>1500</ele>
        <time>2017-05-05T08:50:55.000Z</time>
      </trkpt>
      <trkpt lat="44.1559" lon="5.31258">
        <ele>1507.5999755859</ele>
        <time>2017-05-05T08:51:17.000Z</time>
      </trkpt>
      <trkpt lat="44.15642" lon="5.31287">
        <ele>1514.5999755859</ele>
        <time>2017-05-05T08:51:39.000Z</time>
      </trkpt>
      <trkpt lat="44.15693" lon="5.31311">
        <ele>1520.4000244141</ele>
        <time>2017-05-05T08:52:01.000Z</time>
      </trkpt>
      <trkpt lat="44.15742" lon="5.31344">
        <ele>1527</ele>
        <time>2017-05-05T08:52:22.000Z</time>
      </trkpt>
      <trkpt lat="44.15785" lon="5.31325">
        <ele>1524.4000244141</ele>
        <time>2017-05-05T08:52:44.000Z</time>
      </trkpt>
      <trkpt lat="44.15782" lon="5.31247">
        <ele>1514.1999511719</ele>
        <time>2017-05-05T08:53:06.000Z</time>
      </trkpt>
      <trkpt lat="44.15764" lon="5.31176">
        <ele>1510.1999511719</ele>
        <time>2017-05-05T08:53:30.000Z</time>
      </trkpt>
      <trkpt lat="44.15745" lon="5.31105">
        <ele>1512.5999755859</ele>
        <time>2017-05-05T08:53:53.000Z</time>
      </trkpt>
      <trkpt lat="44.15745" lon="5.31029">
        <ele>1522.5999755859</ele>
        <time>2017-05-05T08:54:16.000Z</time>
      </trkpt>
      <trkpt lat="44.1576" lon="5.30956">
        <ele>1532.5999755859</ele>
        <time>2017-05-05T08:54:39.000Z</time>
      </trkpt>
      <trkpt lat="44.15786" lon="5.3089">
        <ele>1538.5999755859</ele>
        <time>2017-05-05T08:55:02.000Z</time>
      </trkpt>
      <trkpt lat="44.15828" lon="5.30844">
        <ele>1547.4000244141</ele>
        <time>2017-05-05T08:55:24.000Z</time>
      </trkpt>
      <trkpt lat="44.15881" lon="5.30818">
        <ele>1554.1999511719</ele>
        <time>2017-05-05T08:55:47.000Z</time>
      </trkpt>
      <trkpt lat="44.15936" lon="5.30815">
        <ele>1561</ele>
        <time>2017-05-05T08:56:10.000Z</time>
      </trkpt>
      <trkpt lat="44.15991" lon="5.30826">
        <ele>1570.5999755859</ele>
        <time>2017-05-05T08:56:33.000Z</time>
      </trkpt>
      <trkpt lat="44.16031" lon="5.30795">
        <ele>1569.8000488281</ele>
        <time>2017-05-05T08:56:55.000Z</time>
      </trkpt>
      <trkpt lat="44.16003" lon="5.30728">
        <ele>1560.1999511719</ele>
        <time>2017-05-05T08:57:17.000Z</time>
      </trkpt>
      <trkpt lat="44.15983" lon="5.30656">
        <ele>1558.1999511719</ele>
        <time>2017-05-05T08:57:42.000Z</time>
      </trkpt>
      <trkpt lat="44.15969" lon="5.30583">
        <ele>1564</ele>
        <time>2017-05-05T08:58:07.000Z</time>
      </trkpt>
      <trkpt lat="44.15966" lon="5.30506">
        <ele>1571.5999755859</ele>
        <time>2017-05-05T08:58:31.000Z</time>
      </trkpt>
      <trkpt lat="44.15983" lon="5.30431">
        <ele>1579.8000488281</ele>
        <time>2017-05-05T08:58:55.000Z</time>
      </trkpt>
      <trkpt lat="44.15998" lon="5.30359">
        <ele>1584</ele>
        <time>2017-05-05T08:59:18.000Z</time>
      </trkpt>
      <trkpt lat="44.16019" lon="5.30288">
        <ele>1589.4000244141</ele>
        <time>2017-05-05T08:59:41.000Z</time>
      </trkpt>
      <trkpt lat="44.16045" lon="5.3022">
        <ele>1594.1999511719</ele>
        <time>2017-05-05T09:00:04.000Z</time>
      </trkpt>
      <trkpt lat="44.16074" lon="5.30155">
        <ele>1598.4000244141</ele>
        <time>2017-05-05T09:00:27.000Z</time>
      </trkpt>
      <trkpt lat="44.16116" lon="5.30107">
        <ele>1604.5999755859</ele>
        <time>2017-05-05T09:00:50.000Z</time>
      </trkpt>
      <trkpt lat="44.16168" lon="5.30076">
        <ele>1611</ele>
        <time>2017-05-05T09:01:14.000Z</time>
      </trkpt>
      <trkpt lat="44.1621" lon="5.3012">
        <ele>1618</ele>
        <time>2017-05-05T09:01:38.000Z</time>
      </trkpt>
      <trkpt lat="44.16243" lon="5.30182">
        <ele>1627.1999511719</ele>
        <time>2017-05-05T09:02:01.000Z</time>
      </trkpt>
      <trkpt lat="44.16277" lon="5.3024">
        <ele>1635.1999511719</ele>
        <time>2017-05-05T09:02:24.000Z</time>
      </trkpt>
      <trkpt lat="44.16327" lon="5.30249">
        <ele>1640.8000488281</ele>
        <time>2017-05-05T09:02:46.000Z</time>
      </trkpt>
      <trkpt lat="44.16376" lon="5.30213">
        <ele>1638.1999511719</ele>
        <time>2017-05-05T09:03:09.000Z</time>
      </trkpt>
      <trkpt lat="44.1641" lon="5.30153">
        <ele>1636.5999755859</ele>
        <time>2017-05-05T09:03:32.000Z</time>
      </trkpt>
      <trkpt lat="44.16432" lon="5.30082">
        <ele>1636.8000488281</ele>
        <time>2017-05-05T09:03:56.000Z</time>
      </trkpt>
      <trkpt lat="44.16457" lon="5.30012">
        <ele>1640.4000244141</ele>
        <time>2017-05-05T09:04:21.000Z</time>
      </trkpt>
      <trkpt lat="44.16486" lon="5.29947">
        <ele>1644.8000488281</ele>
        <time>2017-05-05T09:04:46.000Z</time>
      </trkpt>
      <trkpt lat="44.16513" lon="5.29882">
        <ele>1651.1999511719</ele>
        <time>2017-05-05T09:05:10.000Z</time>
      </trkpt>
      <trkpt lat="44.16527" lon="5.29807">
        <ele>1652.1999511719</ele>
        <time>2017-05-05T09:05:34.000Z</time>
      </trkpt>
      <trkpt lat="44.16546" lon="5.29734">
        <ele>1658.4000244141</ele>
        <time>2017-05-05T09:05:57.000Z</time>
      </trkpt>
      <trkpt lat="44.16586" lon="5.29684">
        <ele>1669</ele>
        <time>2017-05-05T09:06:21.000Z</time>
      </trkpt>
      <trkpt lat="44.16637" lon="5.29653">
        <ele>1678.1999511719</ele>
        <time>2017-05-05T09:06:47.000Z</time>
      </trkpt>
      <trkpt lat="44.16688" lon="5.29621">
        <ele>1687.4000244141</ele>
        <time>2017-05-05T09:07:13.000Z</time>
      </trkpt>
      <trkpt lat="44.16734" lon="5.29579">
        <ele>1692.1999511719</ele>
        <time>2017-05-05T09:07:38.000Z</time>
      </trkpt>
      <trkpt lat="44.16769" lon="5.2952">
        <ele>1694.8000488281</ele>
        <time>2017-05-05T09:08:02.000Z</time>
      </trkpt>
      <trkpt lat="44.16756" lon="5.2945">
        <ele>1686.4000244141</ele>
        <time>2017-05-05T09:08:23.000Z</time>
      </trkpt>
      <trkpt lat="44.16725" lon="5.29385">
        <ele>1686</ele>
        <time>2017-05-05T09:08:47.000Z</time>
      </trkpt>
      <trkpt lat="44.16708" lon="5.29314">
        <ele>1692.5999755859</ele>
        <time>2017-05-05T09:09:11.000Z</time>
      </trkpt>
      <trkpt lat="44.16722" lon="5.29242">
        <ele>1702.4000244141</ele>
        <time>2017-05-05T09:09:35.000Z</time>
      </trkpt>
      <trkpt lat="44.16749" lon="5.29205">
        <ele>1710</ele>
        <time>2017-05-05T09:10:35.000Z</time>
      </trkpt>
      <trkpt lat="44.168" lon="5.29179">
        <ele>1720.8000488281</ele>
        <time>2017-05-05T09:10:57.000Z</time>
      </trkpt>
      <trkpt lat="44.16853" lon="5.29158">
        <ele>1731.4000244141</ele>
        <time>2017-05-05T09:11:21.000Z</time>
      </trkpt>
      <trkpt lat="44.16906" lon="5.29135">
        <ele>1739.8000488281</ele>
        <time>2017-05-05T09:11:47.000Z</time>
      </trkpt>
      <trkpt lat="44.16949" lon="5.29096">
        <ele>1745.8000488281</ele>
        <time>2017-05-05T09:12:12.000Z</time>
      </trkpt>
      <trkpt lat="44.16948" lon="5.29084">
        <ele>1744</ele>
        <time>2017-05-05T09:12:16.000Z</time>
      </trkpt>
      <trkpt lat="44.16908" lon="5.2903">
        <ele>1733.1999511719</ele>
        <time>2017-05-05T09:12:39.000Z</time>
      </trkpt>
      <trkpt lat="44.1687" lon="5.28977">
        <ele>1733.8000488281</ele>
        <time>2017-05-05T09:13:01.000Z</time>
      </trkpt>
      <trkpt lat="44.16863" lon="5.28901">
        <ele>1741</ele>
        <time>2017-05-05T09:13:24.000Z</time>
      </trkpt>
      <trkpt lat="44.16873" lon="5.28826">
        <ele>1747</ele>
        <time>2017-05-05T09:13:47.000Z</time>
      </trkpt>
      <trkpt lat="44.16891" lon="5.28755">
        <ele>1752.8000488281</ele>
        <time>2017-05-05T09:14:10.000Z</time>
      </trkpt>
      <trkpt lat="44.16916" lon="5.28687">
        <ele>1759</ele>
        <time>2017-05-05T09:14:33.000Z</time>
      </trkpt>
      <trkpt lat="44.1695" lon="5.28628">
        <ele>1766.4000244141</ele>
        <time>2017-05-05T09:14:56.000Z</time>
      </trkpt>
      <trkpt lat="44.16965" lon="5.2861">
        <ele>1769.8000488281</ele>
        <time>2017-05-05T09:15:57.000Z</time>
      </trkpt>
      <trkpt lat="44.17009" lon="5.28567">
        <ele>1779.4000244141</ele>
        <time>2017-05-05T09:16:24.000Z</time>
      </trkpt>
      <trkpt lat="44.17016" lon="5.28561">
        <ele>1780.8000488281</ele>
        <time>2017-05-05T09:16:28.000Z</time>
      </trkpt>
      <trkpt lat="44.17061" lon="5.28519">
        <ele>1787.1999511719</ele>
        <time>2017-05-05T09:16:54.000Z</time>
      </trkpt>
      <trkpt lat="44.171" lon="5.28464">
        <ele>1791.8000488281</ele>
        <time>2017-05-05T09:17:21.000Z</time>
      </trkpt>
      <trkpt lat="44.17151" lon="5.28433">
        <ele>1798.1999511719</ele>
        <time>2017-05-05T09:17:45.000Z</time>
      </trkpt>
      <trkpt lat="44.17206" lon="5.28424">
        <ele>1806.5999755859</ele>
        <time>2017-05-05T09:18:10.000Z</time>
      </trkpt>
      <trkpt lat="44.1726" lon="5.28416">
        <ele>1814</ele>
        <time>2017-05-05T09:18:37.000Z</time>
      </trkpt>
      <trkpt lat="44.17315" lon="5.28406">
        <ele>1817</ele>
        <time>2017-05-05T09:19:03.000Z</time>
      </trkpt>
      <trkpt lat="44.1737" lon="5.28398">
        <ele>1819.5999755859</ele>
        <time>2017-05-05T09:19:30.000Z</time>
      </trkpt>
      <trkpt lat="44.17421" lon="5.28373">
        <ele>1816</ele>
        <time>2017-05-05T09:19:59.000Z</time>
      </trkpt>
      <trkpt lat="44.17423" lon="5.283">
        <ele>1822.4000244141</ele>
        <time>2017-05-05T09:20:25.000Z</time>
      </trkpt>
      <trkpt lat="44.17408" lon="5.28227">
        <ele>1825.4000244141</ele>
        <time>2017-05-05T09:20:51.000Z</time>
      </trkpt>
      <trkpt lat="44.17394" lon="5.28153">
        <ele>1834.5999755859</ele>
        <time>2017-05-05T09:21:19.000Z</time>
      </trkpt>
      <trkpt lat="44.17379" lon="5.28079">
        <ele>1844.1999511719</ele>
        <time>2017-05-05T09:21:46.000Z</time>
      </trkpt>
      <trkpt lat="44.17351" lon="5.28015">
        <ele>1848.1999511719</ele>
        <time>2017-05-05T09:22:12.000Z</time>
      </trkpt>
      <trkpt lat="44.17321" lon="5.27953">
        <ele>1850.5999755859</ele>
        <time>2017-05-05T09:22:39.000Z</time>
      </trkpt>
      <trkpt lat="44.17299" lon="5.2789">
        <ele>1855</ele>
        <time>2017-05-05T09:23:03.000Z</time>
      </trkpt>
      <trkpt lat="44.17302" lon="5.27815">
        <ele>1864.1999511719</ele>
        <time>2017-05-05T09:23:27.000Z</time>
      </trkpt>
      <trkpt lat="44.17327" lon="5.27746">
        <ele>1876.4000244141</ele>
        <time>2017-05-05T09:23:51.000Z</time>
      </trkpt>
      <trkpt lat="44.17353" lon="5.27714">
        <ele>1885.8000488281</ele>
        <time>2017-05-05T09:24:10.000Z</time>
      </trkpt>
      <trkpt lat="44.17348" lon="5.2779">
        <ele>1888</ele>
        <time>2017-05-05T09:24:34.000Z</time>
      </trkpt>
      <trkpt lat="44.17347" lon="5.2784">
        <ele>1879.5999755859</ele>
        <time>2017-05-05T09:27:26.000Z</time>
      </trkpt>
      <trkpt lat="44.17354" lon="5.27828">
        <ele>1885.1999511719</ele>
        <time>2017-05-05T09:33:08.000Z</time>
      </trkpt>
      <trkpt lat="44.17353" lon="5.27752">
        <ele>1888</ele>
        <time>2017-05-05T09:33:24.000Z</time>
      </trkpt>
      <trkpt lat="44.17354" lon="5.27705">
        <ele>1885</ele>
        <time>2017-05-05T09:33:33.000Z</time>
      </trkpt>
      <trkpt lat="44.17344" lon="5.277">
        <ele>1880.5999755859</ele>
        <time>2017-05-05T09:33:36.000Z</time>
      </trkpt>
      <trkpt lat="44.17337" lon="5.27706">
        <ele>1878</ele>
        <time>2017-05-05T09:33:38.000Z</time>
      </trkpt>
      <trkpt lat="44.17331" lon="5.27717">
        <ele>1876.4000244141</ele>
        <time>2017-05-05T09:33:40.000Z</time>
      </trkpt>
      <trkpt lat="44.17307" lon="5.27785">
        <ele>1869.5999755859</ele>
        <time>2017-05-05T09:33:47.000Z</time>
      </trkpt>
      <trkpt lat="44.17297" lon="5.27825">
        <ele>1861.1999511719</ele>
        <time>2017-05-05T09:33:51.000Z</time>
      </trkpt>
      <trkpt lat="44.17294" lon="5.27894">
        <ele>1852.4000244141</ele>
        <time>2017-05-05T09:33:57.000Z</time>
      </trkpt>
      <trkpt lat="44.17299" lon="5.27917">
        <ele>1849.8000488281</ele>
        <time>2017-05-05T09:33:59.000Z</time>
      </trkpt>
      <trkpt lat="44.17331" lon="5.27989">
        <ele>1847</ele>
        <time>2017-05-05T09:34:05.000Z</time>
      </trkpt>
      <trkpt lat="44.17365" lon="5.28056">
        <ele>1844.4000244141</ele>
        <time>2017-05-05T09:34:11.000Z</time>
      </trkpt>
      <trkpt lat="44.17376" lon="5.28082">
        <ele>1842.4000244141</ele>
        <time>2017-05-05T09:34:13.000Z</time>
      </trkpt>
      <trkpt lat="44.17392" lon="5.28158">
        <ele>1832.8000488281</ele>
        <time>2017-05-05T09:34:18.000Z</time>
      </trkpt>
      <trkpt lat="44.17408" lon="5.28238">
        <ele>1823.8000488281</ele>
        <time>2017-05-05T09:34:24.000Z</time>
      </trkpt>
      <trkpt lat="44.17421" lon="5.28312">
        <ele>1820</ele>
        <time>2017-05-05T09:34:30.000Z</time>
      </trkpt>
      <trkpt lat="44.17424" lon="5.28352">
        <ele>1814.5999755859</ele>
        <time>2017-05-05T09:34:34.000Z</time>
      </trkpt>
      <trkpt lat="44.17421" lon="5.28369">
        <ele>1815.1999511719</ele>
        <time>2017-05-05T09:34:36.000Z</time>
      </trkpt>
      <trkpt lat="44.17412" lon="5.28382">
        <ele>1817</ele>
        <time>2017-05-05T09:34:38.000Z</time>
      </trkpt>
      <trkpt lat="44.17398" lon="5.28389">
        <ele>1816.1999511719</ele>
        <time>2017-05-05T09:34:40.000Z</time>
      </trkpt>
      <trkpt lat="44.17343" lon="5.284">
        <ele>1821</ele>
        <time>2017-05-05T09:34:46.000Z</time>
      </trkpt>
      <trkpt lat="44.17287" lon="5.28409">
        <ele>1815.8000488281</ele>
        <time>2017-05-05T09:34:51.000Z</time>
      </trkpt>
      <trkpt lat="44.17226" lon="5.28418">
        <ele>1808.4000244141</ele>
        <time>2017-05-05T09:34:56.000Z</time>
      </trkpt>
      <trkpt lat="44.17163" lon="5.28427">
        <ele>1799.5999755859</ele>
        <time>2017-05-05T09:35:01.000Z</time>
      </trkpt>
      <trkpt lat="44.1714" lon="5.28433">
        <ele>1795.8000488281</ele>
        <time>2017-05-05T09:35:03.000Z</time>
      </trkpt>
      <trkpt lat="44.171" lon="5.28458">
        <ele>1791</ele>
        <time>2017-05-05T09:35:07.000Z</time>
      </trkpt>
      <trkpt lat="44.1706" lon="5.28511">
        <ele>1785.5999755859</ele>
        <time>2017-05-05T09:35:12.000Z</time>
      </trkpt>
      <trkpt lat="44.17005" lon="5.28562">
        <ele>1777.8000488281</ele>
        <time>2017-05-05T09:35:17.000Z</time>
      </trkpt>
      <trkpt lat="44.16956" lon="5.28613">
        <ele>1767.4000244141</ele>
        <time>2017-05-05T09:35:22.000Z</time>
      </trkpt>
      <trkpt lat="44.16917" lon="5.28679">
        <ele>1758.5999755859</ele>
        <time>2017-05-05T09:35:27.000Z</time>
      </trkpt>
      <trkpt lat="44.16887" lon="5.28757">
        <ele>1751.4000244141</ele>
        <time>2017-05-05T09:35:32.000Z</time>
      </trkpt>
      <trkpt lat="44.16869" lon="5.28832">
        <ele>1745.5999755859</ele>
        <time>2017-05-05T09:35:37.000Z</time>
      </trkpt>
      <trkpt lat="44.16858" lon="5.2891">
        <ele>1738.5999755859</ele>
        <time>2017-05-05T09:35:42.000Z</time>
      </trkpt>
      <trkpt lat="44.16859" lon="5.28954">
        <ele>1734.1999511719</ele>
        <time>2017-05-05T09:35:45.000Z</time>
      </trkpt>
      <trkpt lat="44.16864" lon="5.28983">
        <ele>1731.4000244141</ele>
        <time>2017-05-05T09:35:47.000Z</time>
      </trkpt>
      <trkpt lat="44.16874" lon="5.29007">
        <ele>1729.5999755859</ele>
        <time>2017-05-05T09:35:49.000Z</time>
      </trkpt>
      <trkpt lat="44.16888" lon="5.29027">
        <ele>1729.4000244141</ele>
        <time>2017-05-05T09:35:51.000Z</time>
      </trkpt>
      <trkpt lat="44.16933" lon="5.29073">
        <ele>1739.1999511719</ele>
        <time>2017-05-05T09:35:59.000Z</time>
      </trkpt>
      <trkpt lat="44.16936" lon="5.29078">
        <ele>1740.4000244141</ele>
        <time>2017-05-05T09:36:00.000Z</time>
      </trkpt>
      <trkpt lat="44.16941" lon="5.29089">
        <ele>1742.8000488281</ele>
        <time>2017-05-05T09:36:02.000Z</time>
      </trkpt>
      <trkpt lat="44.16943" lon="5.29104">
        <ele>1744.8000488281</ele>
        <time>2017-05-05T09:36:04.000Z</time>
      </trkpt>
      <trkpt lat="44.16938" lon="5.29119">
        <ele>1745.4000244141</ele>
        <time>2017-05-05T09:36:06.000Z</time>
      </trkpt>
      <trkpt lat="44.16928" lon="5.29128">
        <ele>1744</ele>
        <time>2017-05-05T09:36:08.000Z</time>
      </trkpt>
      <trkpt lat="44.16871" lon="5.29147">
        <ele>1734</ele>
        <time>2017-05-05T09:36:14.000Z</time>
      </trkpt>
      <trkpt lat="44.16813" lon="5.29169">
        <ele>1723.1999511719</ele>
        <time>2017-05-05T09:36:19.000Z</time>
      </trkpt>
      <trkpt lat="44.16758" lon="5.29194">
        <ele>1711.4000244141</ele>
        <time>2017-05-05T09:36:24.000Z</time>
      </trkpt>
      <trkpt lat="44.16739" lon="5.2921">
        <ele>1707.4000244141</ele>
        <time>2017-05-05T09:36:26.000Z</time>
      </trkpt>
      <trkpt lat="44.16724" lon="5.29231">
        <ele>1703.1999511719</ele>
        <time>2017-05-05T09:36:28.000Z</time>
      </trkpt>
      <trkpt lat="44.16713" lon="5.29258">
        <ele>1699</ele>
        <time>2017-05-05T09:36:30.000Z</time>
      </trkpt>
      <trkpt lat="44.16706" lon="5.29287">
        <ele>1695.5999755859</ele>
        <time>2017-05-05T09:36:32.000Z</time>
      </trkpt>
      <trkpt lat="44.16705" lon="5.29319">
        <ele>1690.5999755859</ele>
        <time>2017-05-05T09:36:34.000Z</time>
      </trkpt>
      <trkpt lat="44.16709" lon="5.29353">
        <ele>1685.8000488281</ele>
        <time>2017-05-05T09:36:36.000Z</time>
      </trkpt>
      <trkpt lat="44.1672" lon="5.29387">
        <ele>1683.5999755859</ele>
        <time>2017-05-05T09:36:38.000Z</time>
      </trkpt>
      <trkpt lat="44.16753" lon="5.2946">
        <ele>1683</ele>
        <time>2017-05-05T09:36:43.000Z</time>
      </trkpt>
      <trkpt lat="44.16763" lon="5.29485">
        <ele>1688.5999755859</ele>
        <time>2017-05-05T09:36:45.000Z</time>
      </trkpt>
      <trkpt lat="44.16768" lon="5.29512">
        <ele>1693.4000244141</ele>
        <time>2017-05-05T09:36:47.000Z</time>
      </trkpt>
      <trkpt lat="44.16764" lon="5.29537">
        <ele>1694.5999755859</ele>
        <time>2017-05-05T09:36:49.000Z</time>
      </trkpt>
      <trkpt lat="44.16752" lon="5.29559">
        <ele>1694</ele>
        <time>2017-05-05T09:36:51.000Z</time>
      </trkpt>
      <trkpt lat="44.16708" lon="5.29604">
        <ele>1689.8000488281</ele>
        <time>2017-05-05T09:36:56.000Z</time>
      </trkpt>
      <trkpt lat="44.16656" lon="5.29643">
        <ele>1682.4000244141</ele>
        <time>2017-05-05T09:37:01.000Z</time>
      </trkpt>
      <trkpt lat="44.16601" lon="5.29676">
        <ele>1671.1999511719</ele>
        <time>2017-05-05T09:37:06.000Z</time>
      </trkpt>
      <trkpt lat="44.16551" lon="5.29718">
        <ele>1659.8000488281</ele>
        <time>2017-05-05T09:37:11.000Z</time>
      </trkpt>
      <trkpt lat="44.16534" lon="5.29765">
        <ele>1654</ele>
        <time>2017-05-05T09:37:14.000Z</time>
      </trkpt>
      <trkpt lat="44.16519" lon="5.29843">
        <ele>1651.1999511719</ele>
        <time>2017-05-05T09:37:19.000Z</time>
      </trkpt>
      <trkpt lat="44.16499" lon="5.29913">
        <ele>1647</ele>
        <time>2017-05-05T09:37:24.000Z</time>
      </trkpt>
      <trkpt lat="44.1647" lon="5.29977">
        <ele>1642</ele>
        <time>2017-05-05T09:37:29.000Z</time>
      </trkpt>
      <trkpt lat="44.1644" lon="5.30051">
        <ele>1637.4000244141</ele>
        <time>2017-05-05T09:37:34.000Z</time>
      </trkpt>
      <trkpt lat="44.16413" lon="5.30131">
        <ele>1635</ele>
        <time>2017-05-05T09:37:39.000Z</time>
      </trkpt>
      <trkpt lat="44.16392" lon="5.3019">
        <ele>1637</ele>
        <time>2017-05-05T09:37:43.000Z</time>
      </trkpt>
      <trkpt lat="44.16375" lon="5.30213">
        <ele>1637.8000488281</ele>
        <time>2017-05-05T09:37:45.000Z</time>
      </trkpt>
      <trkpt lat="44.16324" lon="5.30251">
        <ele>1641.1999511719</ele>
        <time>2017-05-05T09:37:50.000Z</time>
      </trkpt>
      <trkpt lat="44.16315" lon="5.30256">
        <ele>1641.5999755859</ele>
        <time>2017-05-05T09:37:51.000Z</time>
      </trkpt>
      <trkpt lat="44.16298" lon="5.30257">
        <ele>1639.5999755859</ele>
        <time>2017-05-05T09:37:53.000Z</time>
      </trkpt>
      <trkpt lat="44.16281" lon="5.30245">
        <ele>1636.1999511719</ele>
        <time>2017-05-05T09:37:55.000Z</time>
      </trkpt>
      <trkpt lat="44.16242" lon="5.3018">
        <ele>1627</ele>
        <time>2017-05-05T09:38:01.000Z</time>
      </trkpt>
      <trkpt lat="44.16209" lon="5.30118">
        <ele>1618</ele>
        <time>2017-05-05T09:38:08.000Z</time>
      </trkpt>
      <trkpt lat="44.16193" lon="5.3009">
        <ele>1616</ele>
        <time>2017-05-05T09:38:11.000Z</time>
      </trkpt>
      <trkpt lat="44.16179" lon="5.30076">
        <ele>1612.5999755859</ele>
        <time>2017-05-05T09:38:13.000Z</time>
      </trkpt>
      <trkpt lat="44.16161" lon="5.30073">
        <ele>1609.5999755859</ele>
        <time>2017-05-05T09:38:15.000Z</time>
      </trkpt>
      <trkpt lat="44.16141" lon="5.30082">
        <ele>1607.4000244141</ele>
        <time>2017-05-05T09:38:17.000Z</time>
      </trkpt>
      <trkpt lat="44.16091" lon="5.30126">
        <ele>1600.4000244141</ele>
        <time>2017-05-05T09:38:22.000Z</time>
      </trkpt>
      <trkpt lat="44.1605" lon="5.30193">
        <ele>1594.8000488281</ele>
        <time>2017-05-05T09:38:27.000Z</time>
      </trkpt>
      <trkpt lat="44.16024" lon="5.3026">
        <ele>1590.1999511719</ele>
        <time>2017-05-05T09:38:31.000Z</time>
      </trkpt>
      <trkpt lat="44.16" lon="5.3033">
        <ele>1584.5999755859</ele>
        <time>2017-05-05T09:38:35.000Z</time>
      </trkpt>
      <trkpt lat="44.15983" lon="5.30404">
        <ele>1580.4000244141</ele>
        <time>2017-05-05T09:38:39.000Z</time>
      </trkpt>
      <trkpt lat="44.15966" lon="5.3049">
        <ele>1573</ele>
        <time>2017-05-05T09:38:44.000Z</time>
      </trkpt>
      <trkpt lat="44.1596" lon="5.3054">
        <ele>1567</ele>
        <time>2017-05-05T09:38:47.000Z</time>
      </trkpt>
      <trkpt lat="44.15961" lon="5.30575">
        <ele>1563</ele>
        <time>2017-05-05T09:38:49.000Z</time>
      </trkpt>
      <trkpt lat="44.15977" lon="5.30661">
        <ele>1556</ele>
        <time>2017-05-05T09:38:54.000Z</time>
      </trkpt>
      <trkpt lat="44.15999" lon="5.30737">
        <ele>1559.1999511719</ele>
        <time>2017-05-05T09:38:59.000Z</time>
      </trkpt>
      <trkpt lat="44.16024" lon="5.3079">
        <ele>1567.8000488281</ele>
        <time>2017-05-05T09:39:04.000Z</time>
      </trkpt>
      <trkpt lat="44.16026" lon="5.30809">
        <ele>1571.1999511719</ele>
        <time>2017-05-05T09:39:06.000Z</time>
      </trkpt>
      <trkpt lat="44.16018" lon="5.30825">
        <ele>1573.5999755859</ele>
        <time>2017-05-05T09:39:08.000Z</time>
      </trkpt>
      <trkpt lat="44.16004" lon="5.30827">
        <ele>1572.4000244141</ele>
        <time>2017-05-05T09:39:10.000Z</time>
      </trkpt>
      <trkpt lat="44.15947" lon="5.30816">
        <ele>1562.5999755859</ele>
        <time>2017-05-05T09:39:16.000Z</time>
      </trkpt>
      <trkpt lat="44.15892" lon="5.30811">
        <ele>1554.4000244141</ele>
        <time>2017-05-05T09:39:21.000Z</time>
      </trkpt>
      <trkpt lat="44.1588" lon="5.30814">
        <ele>1553.1999511719</ele>
        <time>2017-05-05T09:39:22.000Z</time>
      </trkpt>
      <trkpt lat="44.15834" lon="5.30833">
        <ele>1547.1999511719</ele>
        <time>2017-05-05T09:39:26.000Z</time>
      </trkpt>
      <trkpt lat="44.15811" lon="5.30851">
        <ele>1543.4000244141</ele>
        <time>2017-05-05T09:39:28.000Z</time>
      </trkpt>
      <trkpt lat="44.15782" lon="5.30886">
        <ele>1537.1999511719</ele>
        <time>2017-05-05T09:39:31.000Z</time>
      </trkpt>
      <trkpt lat="44.15767" lon="5.30917">
        <ele>1534</ele>
        <time>2017-05-05T09:39:33.000Z</time>
      </trkpt>
      <trkpt lat="44.15745" lon="5.30986">
        <ele>1526</ele>
        <time>2017-05-05T09:39:37.000Z</time>
      </trkpt>
      <trkpt lat="44.15735" lon="5.3106">
        <ele>1515.1999511719</ele>
        <time>2017-05-05T09:39:41.000Z</time>
      </trkpt>
      <trkpt lat="44.15736" lon="5.31097">
        <ele>1510.5999755859</ele>
        <time>2017-05-05T09:39:43.000Z</time>
      </trkpt>
      <trkpt lat="44.15757" lon="5.31182">
        <ele>1507.1999511719</ele>
        <time>2017-05-05T09:39:48.000Z</time>
      </trkpt>
      <trkpt lat="44.15773" lon="5.31222">
        <ele>1510.4000244141</ele>
        <time>2017-05-05T09:39:51.000Z</time>
      </trkpt>
      <trkpt lat="44.15777" lon="5.31253">
        <ele>1514</ele>
        <time>2017-05-05T09:39:53.000Z</time>
      </trkpt>
      <trkpt lat="44.15777" lon="5.31329">
        <ele>1524.4000244141</ele>
        <time>2017-05-05T09:39:59.000Z</time>
      </trkpt>
      <trkpt lat="44.15769" lon="5.31343">
        <ele>1526.8000488281</ele>
        <time>2017-05-05T09:40:01.000Z</time>
      </trkpt>
      <trkpt lat="44.15757" lon="5.31348">
        <ele>1527.5999755859</ele>
        <time>2017-05-05T09:40:03.000Z</time>
      </trkpt>
      <trkpt lat="44.15736" lon="5.31335">
        <ele>1525.4000244141</ele>
        <time>2017-05-05T09:40:06.000Z</time>
      </trkpt>
      <trkpt lat="44.15704" lon="5.3131">
        <ele>1521</ele>
        <time>2017-05-05T09:40:10.000Z</time>
      </trkpt>
      <trkpt lat="44.15643" lon="5.31283">
        <ele>1514.1999511719</ele>
        <time>2017-05-05T09:40:16.000Z</time>
      </trkpt>
      <trkpt lat="44.15585" lon="5.3125">
        <ele>1506.1999511719</ele>
        <time>2017-05-05T09:40:22.000Z</time>
      </trkpt>
      <trkpt lat="44.1554" lon="5.3122">
        <ele>1499.5999755859</ele>
        <time>2017-05-05T09:40:27.000Z</time>
      </trkpt>
      <trkpt lat="44.15521" lon="5.31217">
        <ele>1496.5999755859</ele>
        <time>2017-05-05T09:40:29.000Z</time>
      </trkpt>
      <trkpt lat="44.15502" lon="5.31227">
        <ele>1492.4000244141</ele>
        <time>2017-05-05T09:40:31.000Z</time>
      </trkpt>
      <trkpt lat="44.15489" lon="5.31249">
        <ele>1489.5999755859</ele>
        <time>2017-05-05T09:40:33.000Z</time>
      </trkpt>
      <trkpt lat="44.15482" lon="5.31279">
        <ele>1487.4000244141</ele>
        <time>2017-05-05T09:40:35.000Z</time>
      </trkpt>
      <trkpt lat="44.15474" lon="5.31362">
        <ele>1482.1999511719</ele>
        <time>2017-05-05T09:40:40.000Z</time>
      </trkpt>
      <trkpt lat="44.15471" lon="5.3144">
        <ele>1481.5999755859</ele>
        <time>2017-05-05T09:40:45.000Z</time>
      </trkpt>
      <trkpt lat="44.15473" lon="5.31477">
        <ele>1485</ele>
        <time>2017-05-05T09:40:48.000Z</time>
      </trkpt>
      <trkpt lat="44.15482" lon="5.31507">
        <ele>1489.4000244141</ele>
        <time>2017-05-05T09:40:51.000Z</time>
      </trkpt>
      <trkpt lat="44.15491" lon="5.3153">
        <ele>1493.1999511719</ele>
        <time>2017-05-05T09:40:54.000Z</time>
      </trkpt>
      <trkpt lat="44.15488" lon="5.31544">
        <ele>1494.8000488281</ele>
        <time>2017-05-05T09:40:56.000Z</time>
      </trkpt>
      <trkpt lat="44.15475" lon="5.31545">
        <ele>1493.8000488281</ele>
        <time>2017-05-05T09:40:58.000Z</time>
      </trkpt>
      <trkpt lat="44.15421" lon="5.31507">
        <ele>1484.5999755859</ele>
        <time>2017-05-05T09:41:04.000Z</time>
      </trkpt>
      <trkpt lat="44.15366" lon="5.31469">
        <ele>1476.8000488281</ele>
        <time>2017-05-05T09:41:09.000Z</time>
      </trkpt>
      <trkpt lat="44.15311" lon="5.3144">
        <ele>1470</ele>
        <time>2017-05-05T09:41:14.000Z</time>
      </trkpt>
      <trkpt lat="44.15301" lon="5.31432">
        <ele>1468.8000488281</ele>
        <time>2017-05-05T09:41:15.000Z</time>
      </trkpt>
      <trkpt lat="44.15259" lon="5.31383">
        <ele>1464.1999511719</ele>
        <time>2017-05-05T09:41:20.000Z</time>
      </trkpt>
      <trkpt lat="44.1525" lon="5.31375">
        <ele>1463.1999511719</ele>
        <time>2017-05-05T09:41:21.000Z</time>
      </trkpt>
      <trkpt lat="44.15229" lon="5.31361">
        <ele>1461</ele>
        <time>2017-05-05T09:41:23.000Z</time>
      </trkpt>
      <trkpt lat="44.15173" lon="5.31346">
        <ele>1455.1999511719</ele>
        <time>2017-05-05T09:41:28.000Z</time>
      </trkpt>
      <trkpt lat="44.15152" lon="5.31346">
        <ele>1452.8000488281</ele>
        <time>2017-05-05T09:41:30.000Z</time>
      </trkpt>
      <trkpt lat="44.15132" lon="5.31356">
        <ele>1449.5999755859</ele>
        <time>2017-05-05T09:41:32.000Z</time>
      </trkpt>
      <trkpt lat="44.15091" lon="5.314">
        <ele>1439.1999511719</ele>
        <time>2017-05-05T09:41:37.000Z</time>
      </trkpt>
      <trkpt lat="44.15084" lon="5.31424">
        <ele>1434.1999511719</ele>
        <time>2017-05-05T09:41:39.000Z</time>
      </trkpt>
      <trkpt lat="44.15087" lon="5.31453">
        <ele>1429.8000488281</ele>
        <time>2017-05-05T09:41:41.000Z</time>
      </trkpt>
      <trkpt lat="44.15098" lon="5.3148">
        <ele>1428</ele>
        <time>2017-05-05T09:41:43.000Z</time>
      </trkpt>
      <trkpt lat="44.15112" lon="5.31509">
        <ele>1426.8000488281</ele>
        <time>2017-05-05T09:41:45.000Z</time>
      </trkpt>
      <trkpt lat="44.15136" lon="5.31593">
        <ele>1419.8000488281</ele>
        <time>2017-05-05T09:41:50.000Z</time>
      </trkpt>
      <trkpt lat="44.15157" lon="5.31663">
        <ele>1414.4000244141</ele>
        <time>2017-05-05T09:41:54.000Z</time>
      </trkpt>
      <trkpt lat="44.15188" lon="5.3174">
        <ele>1417.5999755859</ele>
        <time>2017-05-05T09:41:59.000Z</time>
      </trkpt>
      <trkpt lat="44.15212" lon="5.31818">
        <ele>1422.5999755859</ele>
        <time>2017-05-05T09:42:05.000Z</time>
      </trkpt>
      <trkpt lat="44.15219" lon="5.31846">
        <ele>1427.1999511719</ele>
        <time>2017-05-05T09:42:08.000Z</time>
      </trkpt>
      <trkpt lat="44.15218" lon="5.31866">
        <ele>1430.4000244141</ele>
        <time>2017-05-05T09:42:10.000Z</time>
      </trkpt>
      <trkpt lat="44.15207" lon="5.31879">
        <ele>1433.1999511719</ele>
        <time>2017-05-05T09:42:12.000Z</time>
      </trkpt>
      <trkpt lat="44.15192" lon="5.31883">
        <ele>1434.8000488281</ele>
        <time>2017-05-05T09:42:14.000Z</time>
      </trkpt>
      <trkpt lat="44.15177" lon="5.31875">
        <ele>1434.4000244141</ele>
        <time>2017-05-05T09:42:16.000Z</time>
      </trkpt>
      <trkpt lat="44.15129" lon="5.31827">
        <ele>1428.4000244141</ele>
        <time>2017-05-05T09:42:22.000Z</time>
      </trkpt>
      <trkpt lat="44.15082" lon="5.31783">
        <ele>1422</ele>
        <time>2017-05-05T09:42:27.000Z</time>
      </trkpt>
      <trkpt lat="44.15029" lon="5.31755">
        <ele>1417.8000488281</ele>
        <time>2017-05-05T09:42:32.000Z</time>
      </trkpt>
      <trkpt lat="44.14976" lon="5.3173">
        <ele>1413</ele>
        <time>2017-05-05T09:42:37.000Z</time>
      </trkpt>
      <trkpt lat="44.14923" lon="5.31691">
        <ele>1406.4000244141</ele>
        <time>2017-05-05T09:42:42.000Z</time>
      </trkpt>
      <trkpt lat="44.14866" lon="5.31653">
        <ele>1399.5999755859</ele>
        <time>2017-05-05T09:42:47.000Z</time>
      </trkpt>
      <trkpt lat="44.14812" lon="5.31619">
        <ele>1391.5999755859</ele>
        <time>2017-05-05T09:42:52.000Z</time>
      </trkpt>
      <trkpt lat="44.14756" lon="5.31598">
        <ele>1385.5999755859</ele>
        <time>2017-05-05T09:42:57.000Z</time>
      </trkpt>
      <trkpt lat="44.14746" lon="5.31592">
        <ele>1384.5999755859</ele>
        <time>2017-05-05T09:42:58.000Z</time>
      </trkpt>
      <trkpt lat="44.14701" lon="5.31548">
        <ele>1378.1999511719</ele>
        <time>2017-05-05T09:43:03.000Z</time>
      </trkpt>
      <trkpt lat="44.14681" lon="5.31535">
        <ele>1375.5999755859</ele>
        <time>2017-05-05T09:43:05.000Z</time>
      </trkpt>
      <trkpt lat="44.14629" lon="5.31521">
        <ele>1368.8000488281</ele>
        <time>2017-05-05T09:43:10.000Z</time>
      </trkpt>
      <trkpt lat="44.1461" lon="5.31526">
        <ele>1367.1999511719</ele>
        <time>2017-05-05T09:43:12.000Z</time>
      </trkpt>
      <trkpt lat="44.14592" lon="5.31542">
        <ele>1367</ele>
        <time>2017-05-05T09:43:14.000Z</time>
      </trkpt>
      <trkpt lat="44.14555" lon="5.31607">
        <ele>1360.4000244141</ele>
        <time>2017-05-05T09:43:19.000Z</time>
      </trkpt>
      <trkpt lat="44.1454" lon="5.31639">
        <ele>1356.5999755859</ele>
        <time>2017-05-05T09:43:22.000Z</time>
      </trkpt>
      <trkpt lat="44.14535" lon="5.3166">
        <ele>1354.8000488281</ele>
        <time>2017-05-05T09:43:24.000Z</time>
      </trkpt>
      <trkpt lat="44.1454" lon="5.31683">
        <ele>1353.8000488281</ele>
        <time>2017-05-05T09:43:26.000Z</time>
      </trkpt>
      <trkpt lat="44.14551" lon="5.31705">
        <ele>1353.4000244141</ele>
        <time>2017-05-05T09:43:28.000Z</time>
      </trkpt>
      <trkpt lat="44.1458" lon="5.31751">
        <ele>1360.4000244141</ele>
        <time>2017-05-05T09:43:33.000Z</time>
      </trkpt>
      <trkpt lat="44.14582" lon="5.31764">
        <ele>1362.1999511719</ele>
        <time>2017-05-05T09:43:35.000Z</time>
      </trkpt>
      <trkpt lat="44.14525" lon="5.31753">
        <ele>1356.4000244141</ele>
        <time>2017-05-05T09:43:44.000Z</time>
      </trkpt>
      <trkpt lat="44.14465" lon="5.31738">
        <ele>1347.4000244141</ele>
        <time>2017-05-05T09:43:50.000Z</time>
      </trkpt>
      <trkpt lat="44.14405" lon="5.31745">
        <ele>1339</ele>
        <time>2017-05-05T09:43:55.000Z</time>
      </trkpt>
      <trkpt lat="44.14382" lon="5.3176">
        <ele>1334.5999755859</ele>
        <time>2017-05-05T09:43:57.000Z</time>
      </trkpt>
      <trkpt lat="44.14337" lon="5.31804">
        <ele>1325.8000488281</ele>
        <time>2017-05-05T09:44:01.000Z</time>
      </trkpt>
      <trkpt lat="44.14286" lon="5.31847">
        <ele>1322</ele>
        <time>2017-05-05T09:44:06.000Z</time>
      </trkpt>
      <trkpt lat="44.14276" lon="5.31853">
        <ele>1321.1999511719</ele>
        <time>2017-05-05T09:44:07.000Z</time>
      </trkpt>
      <trkpt lat="44.14257" lon="5.31856">
        <ele>1319.5999755859</ele>
        <time>2017-05-05T09:44:09.000Z</time>
      </trkpt>
      <trkpt lat="44.14225" lon="5.31843">
        <ele>1316</ele>
        <time>2017-05-05T09:44:12.000Z</time>
      </trkpt>
      <trkpt lat="44.14201" lon="5.31843">
        <ele>1314.4000244141</ele>
        <time>2017-05-05T09:44:14.000Z</time>
      </trkpt>
      <trkpt lat="44.14178" lon="5.31847">
        <ele>1314.5999755859</ele>
        <time>2017-05-05T09:44:16.000Z</time>
      </trkpt>
      <trkpt lat="44.14156" lon="5.3184">
        <ele>1313.8000488281</ele>
        <time>2017-05-05T09:44:18.000Z</time>
      </trkpt>
      <trkpt lat="44.14106" lon="5.31791">
        <ele>1307.4000244141</ele>
        <time>2017-05-05T09:44:23.000Z</time>
      </trkpt>
      <trkpt lat="44.14067" lon="5.31733">
        <ele>1301.5999755859</ele>
        <time>2017-05-05T09:44:27.000Z</time>
      </trkpt>
      <trkpt lat="44.14028" lon="5.31674">
        <ele>1294.8000488281</ele>
        <time>2017-05-05T09:44:31.000Z</time>
      </trkpt>
      <trkpt lat="44.13985" lon="5.31615">
        <ele>1288.5999755859</ele>
        <time>2017-05-05T09:44:35.000Z</time>
      </trkpt>
      <trkpt lat="44.13945" lon="5.31554">
        <ele>1285.4000244141</ele>
        <time>2017-05-05T09:44:39.000Z</time>
      </trkpt>
      <trkpt lat="44.13902" lon="5.31484">
        <ele>1281.8000488281</ele>
        <time>2017-05-05T09:44:44.000Z</time>
      </trkpt>
      <trkpt lat="44.13865" lon="5.3141">
        <ele>1277</ele>
        <time>2017-05-05T09:44:49.000Z</time>
      </trkpt>
      <trkpt lat="44.13841" lon="5.31323">
        <ele>1267.5999755859</ele>
        <time>2017-05-05T09:44:54.000Z</time>
      </trkpt>
      <trkpt lat="44.13828" lon="5.31235">
        <ele>1259.4000244141</ele>
        <time>2017-05-05T09:44:59.000Z</time>
      </trkpt>
      <trkpt lat="44.13811" lon="5.31152">
        <ele>1253.4000244141</ele>
        <time>2017-05-05T09:45:04.000Z</time>
      </trkpt>
      <trkpt lat="44.13812" lon="5.31103">
        <ele>1249</ele>
        <time>2017-05-05T09:45:07.000Z</time>
      </trkpt>
      <trkpt lat="44.13807" lon="5.3107">
        <ele>1246.4000244141</ele>
        <time>2017-05-05T09:45:09.000Z</time>
      </trkpt>
      <trkpt lat="44.1378" lon="5.30985">
        <ele>1236.8000488281</ele>
        <time>2017-05-05T09:45:14.000Z</time>
      </trkpt>
      <trkpt lat="44.13746" lon="5.30912">
        <ele>1231.4000244141</ele>
        <time>2017-05-05T09:45:19.000Z</time>
      </trkpt>
      <trkpt lat="44.13704" lon="5.30855">
        <ele>1227.4000244141</ele>
        <time>2017-05-05T09:45:24.000Z</time>
      </trkpt>
      <trkpt lat="44.13653" lon="5.30794">
        <ele>1218.8000488281</ele>
        <time>2017-05-05T09:45:29.000Z</time>
      </trkpt>
      <trkpt lat="44.13612" lon="5.30744">
        <ele>1211</ele>
        <time>2017-05-05T09:45:33.000Z</time>
      </trkpt>
      <trkpt lat="44.13571" lon="5.30674">
        <ele>1201.8000488281</ele>
        <time>2017-05-05T09:45:38.000Z</time>
      </trkpt>
      <trkpt lat="44.1355" lon="5.306">
        <ele>1196.5999755859</ele>
        <time>2017-05-05T09:45:43.000Z</time>
      </trkpt>
      <trkpt lat="44.13548" lon="5.30583">
        <ele>1195.8000488281</ele>
        <time>2017-05-05T09:45:44.000Z</time>
      </trkpt>
      <trkpt lat="44.13549" lon="5.30548">
        <ele>1194.8000488281</ele>
        <time>2017-05-05T09:45:46.000Z</time>
      </trkpt>
      <trkpt lat="44.13559" lon="5.30473">
        <ele>1194</ele>
        <time>2017-05-05T09:45:50.000Z</time>
      </trkpt>
      <trkpt lat="44.13574" lon="5.30397">
        <ele>1190.1999511719</ele>
        <time>2017-05-05T09:45:54.000Z</time>
      </trkpt>
      <trkpt lat="44.1359" lon="5.30314">
        <ele>1184</ele>
        <time>2017-05-05T09:45:59.000Z</time>
      </trkpt>
      <trkpt lat="44.13589" lon="5.30285">
        <ele>1181</ele>
        <time>2017-05-05T09:46:01.000Z</time>
      </trkpt>
      <trkpt lat="44.13578" lon="5.30258">
        <ele>1178</ele>
        <time>2017-05-05T09:46:03.000Z</time>
      </trkpt>
      <trkpt lat="44.13539" lon="5.30188">
        <ele>1171.5999755859</ele>
        <time>2017-05-05T09:46:08.000Z</time>
      </trkpt>
      <trkpt lat="44.135" lon="5.30113">
        <ele>1166.8000488281</ele>
        <time>2017-05-05T09:46:13.000Z</time>
      </trkpt>
      <trkpt lat="44.13487" lon="5.30083">
        <ele>1165.8000488281</ele>
        <time>2017-05-05T09:46:15.000Z</time>
      </trkpt>
      <trkpt lat="44.13479" lon="5.30048">
        <ele>1163.4000244141</ele>
        <time>2017-05-05T09:46:17.000Z</time>
      </trkpt>
      <trkpt lat="44.13471" lon="5.29971">
        <ele>1158.5999755859</ele>
        <time>2017-05-05T09:46:21.000Z</time>
      </trkpt>
      <trkpt lat="44.13464" lon="5.29892">
        <ele>1151.4000244141</ele>
        <time>2017-05-05T09:46:25.000Z</time>
      </trkpt>
      <trkpt lat="44.13457" lon="5.29817">
        <ele>1144.1999511719</ele>
        <time>2017-05-05T09:46:29.000Z</time>
      </trkpt>
      <trkpt lat="44.13439" lon="5.29728">
        <ele>1134</ele>
        <time>2017-05-05T09:46:34.000Z</time>
      </trkpt>
      <trkpt lat="44.13409" lon="5.29659">
        <ele>1129.1999511719</ele>
        <time>2017-05-05T09:46:38.000Z</time>
      </trkpt>
      <trkpt lat="44.13376" lon="5.29587">
        <ele>1123.4000244141</ele>
        <time>2017-05-05T09:46:42.000Z</time>
      </trkpt>
      <trkpt lat="44.13343" lon="5.29516">
        <ele>1116.4000244141</ele>
        <time>2017-05-05T09:46:46.000Z</time>
      </trkpt>
      <trkpt lat="44.13306" lon="5.29456">
        <ele>1111.1999511719</ele>
        <time>2017-05-05T09:46:50.000Z</time>
      </trkpt>
      <trkpt lat="44.13266" lon="5.29389">
        <ele>1101.4000244141</ele>
        <time>2017-05-05T09:46:55.000Z</time>
      </trkpt>
      <trkpt lat="44.13231" lon="5.2932">
        <ele>1091.4000244141</ele>
        <time>2017-05-05T09:47:00.000Z</time>
      </trkpt>
      <trkpt lat="44.13207" lon="5.29273">
        <ele>1085.1999511719</ele>
        <time>2017-05-05T09:47:05.000Z</time>
      </trkpt>
      <trkpt lat="44.1318" lon="5.29198">
        <ele>1076</ele>
        <time>2017-05-05T09:47:14.000Z</time>
      </trkpt>
      <trkpt lat="44.1315" lon="5.29121">
        <ele>1068.5999755859</ele>
        <time>2017-05-05T09:47:21.000Z</time>
      </trkpt>
      <trkpt lat="44.13113" lon="5.29053">
        <ele>1059.8000488281</ele>
        <time>2017-05-05T09:47:27.000Z</time>
      </trkpt>
      <trkpt lat="44.13094" lon="5.29016">
        <ele>1055.1999511719</ele>
        <time>2017-05-05T09:47:30.000Z</time>
      </trkpt>
      <trkpt lat="44.13073" lon="5.2894">
        <ele>1047.1999511719</ele>
        <time>2017-05-05T09:47:35.000Z</time>
      </trkpt>
      <trkpt lat="44.13064" lon="5.28913">
        <ele>1044.4000244141</ele>
        <time>2017-05-05T09:47:37.000Z</time>
      </trkpt>
      <trkpt lat="44.13043" lon="5.28878">
        <ele>1040</ele>
        <time>2017-05-05T09:47:40.000Z</time>
      </trkpt>
      <trkpt lat="44.12994" lon="5.28842">
        <ele>1033</ele>
        <time>2017-05-05T09:47:45.000Z</time>
      </trkpt>
      <trkpt lat="44.1297" lon="5.28824">
        <ele>1029.4000244141</ele>
        <time>2017-05-05T09:47:48.000Z</time>
      </trkpt>
      <trkpt lat="44.12959" lon="5.28806">
        <ele>1027.1999511719</ele>
        <time>2017-05-05T09:47:50.000Z</time>
      </trkpt>
      <trkpt lat="44.12957" lon="5.28778">
        <ele>1025.5999755859</ele>
        <time>2017-05-05T09:47:52.000Z</time>
      </trkpt>
      <trkpt lat="44.12959" lon="5.28734">
        <ele>1023.5999755859</ele>
        <time>2017-05-05T09:47:55.000Z</time>
      </trkpt>
      <trkpt lat="44.12951" lon="5.28706">
        <ele>1021.4000244141</ele>
        <time>2017-05-05T09:47:57.000Z</time>
      </trkpt>
      <trkpt lat="44.12916" lon="5.28641">
        <ele>1016</ele>
        <time>2017-05-05T09:48:02.000Z</time>
      </trkpt>
      <trkpt lat="44.12903" lon="5.2862">
        <ele>1014</ele>
        <time>2017-05-05T09:48:04.000Z</time>
      </trkpt>
      <trkpt lat="44.12895" lon="5.28593">
        <ele>1011.5999755859</ele>
        <time>2017-05-05T09:48:06.000Z</time>
      </trkpt>
      <trkpt lat="44.12888" lon="5.28512">
        <ele>1005.200012207</ele>
        <time>2017-05-05T09:48:11.000Z</time>
      </trkpt>
      <trkpt lat="44.12878" lon="5.28483">
        <ele>1001.5999755859</ele>
        <time>2017-05-05T09:48:13.000Z</time>
      </trkpt>
      <trkpt lat="44.12848" lon="5.2843">
        <ele>994.79998779297</ele>
        <time>2017-05-05T09:48:18.000Z</time>
      </trkpt>
      <trkpt lat="44.12848" lon="5.28409">
        <ele>993.40002441406</ele>
        <time>2017-05-05T09:48:20.000Z</time>
      </trkpt>
      <trkpt lat="44.12859" lon="5.28395">
        <ele>993</ele>
        <time>2017-05-05T09:48:22.000Z</time>
      </trkpt>
      <trkpt lat="44.12873" lon="5.2839">
        <ele>994.40002441406</ele>
        <time>2017-05-05T09:48:24.000Z</time>
      </trkpt>
      <trkpt lat="44.12881" lon="5.28379">
        <ele>995</ele>
        <time>2017-05-05T09:48:26.000Z</time>
      </trkpt>
      <trkpt lat="44.12877" lon="5.28368">
        <ele>995</ele>
        <time>2017-05-05T09:48:28.000Z</time>
      </trkpt>
      <trkpt lat="44.12865" lon="5.28364">
        <ele>993.40002441406</ele>
        <time>2017-05-05T09:48:30.000Z</time>
      </trkpt>
      <trkpt lat="44.12839" lon="5.28368">
        <ele>989.59997558594</ele>
        <time>2017-05-05T09:48:33.000Z</time>
      </trkpt>
      <trkpt lat="44.1282" lon="5.28365">
        <ele>988.20001220703</ele>
        <time>2017-05-05T09:48:35.000Z</time>
      </trkpt>
      <trkpt lat="44.12791" lon="5.28359">
        <ele>985.79998779297</ele>
        <time>2017-05-05T09:48:38.000Z</time>
      </trkpt>
      <trkpt lat="44.12749" lon="5.2837">
        <ele>988</ele>
        <time>2017-05-05T09:48:42.000Z</time>
      </trkpt>
      <trkpt lat="44.12728" lon="5.28367">
        <ele>989</ele>
        <time>2017-05-05T09:48:44.000Z</time>
      </trkpt>
      <trkpt lat="44.12709" lon="5.28356">
        <ele>989.40002441406</ele>
        <time>2017-05-05T09:48:46.000Z</time>
      </trkpt>
      <trkpt lat="44.12697" lon="5.28333">
        <ele>988.40002441406</ele>
        <time>2017-05-05T09:48:48.000Z</time>
      </trkpt>
      <trkpt lat="44.12697" lon="5.28302">
        <ele>986.20001220703</ele>
        <time>2017-05-05T09:48:50.000Z</time>
      </trkpt>
      <trkpt lat="44.12707" lon="5.28216">
        <ele>979.40002441406</ele>
        <time>2017-05-05T09:48:55.000Z</time>
      </trkpt>
      <trkpt lat="44.12707" lon="5.28199">
        <ele>977.40002441406</ele>
        <time>2017-05-05T09:48:56.000Z</time>
      </trkpt>
      <trkpt lat="44.12702" lon="5.28166">
        <ele>972.79998779297</ele>
        <time>2017-05-05T09:48:58.000Z</time>
      </trkpt>
      <trkpt lat="44.12679" lon="5.28098">
        <ele>969</ele>
        <time>2017-05-05T09:49:02.000Z</time>
      </trkpt>
      <trkpt lat="44.12663" lon="5.28051">
        <ele>968.59997558594</ele>
        <time>2017-05-05T09:49:05.000Z</time>
      </trkpt>
      <trkpt lat="44.12658" lon="5.28017">
        <ele>965.20001220703</ele>
        <time>2017-05-05T09:49:07.000Z</time>
      </trkpt>
      <trkpt lat="44.12658" lon="5.27925">
        <ele>957.20001220703</ele>
        <time>2017-05-05T09:49:12.000Z</time>
      </trkpt>
      <trkpt lat="44.12653" lon="5.27864">
        <ele>952.20001220703</ele>
        <time>2017-05-05T09:49:16.000Z</time>
      </trkpt>
      <trkpt lat="44.12641" lon="5.27841">
        <ele>950.20001220703</ele>
        <time>2017-05-05T09:49:18.000Z</time>
      </trkpt>
      <trkpt lat="44.1262" lon="5.2781">
        <ele>948.79998779297</ele>
        <time>2017-05-05T09:49:21.000Z</time>
      </trkpt>
      <trkpt lat="44.12612" lon="5.27783">
        <ele>946</ele>
        <time>2017-05-05T09:49:23.000Z</time>
      </trkpt>
      <trkpt lat="44.12594" lon="5.27704">
        <ele>938.59997558594</ele>
        <time>2017-05-05T09:49:28.000Z</time>
      </trkpt>
      <trkpt lat="44.12576" lon="5.27626">
        <ele>934.79998779297</ele>
        <time>2017-05-05T09:49:33.000Z</time>
      </trkpt>
      <trkpt lat="44.12574" lon="5.27612">
        <ele>934.59997558594</ele>
        <time>2017-05-05T09:49:34.000Z</time>
      </trkpt>
      <trkpt lat="44.12574" lon="5.27583">
        <ele>933.20001220703</ele>
        <time>2017-05-05T09:49:36.000Z</time>
      </trkpt>
      <trkpt lat="44.12578" lon="5.27553">
        <ele>930.40002441406</ele>
        <time>2017-05-05T09:49:38.000Z</time>
      </trkpt>
      <trkpt lat="44.12607" lon="5.27477">
        <ele>921.40002441406</ele>
        <time>2017-05-05T09:49:43.000Z</time>
      </trkpt>
      <trkpt lat="44.12634" lon="5.27412">
        <ele>920.79998779297</ele>
        <time>2017-05-05T09:49:47.000Z</time>
      </trkpt>
      <trkpt lat="44.12663" lon="5.27339">
        <ele>912.40002441406</ele>
        <time>2017-05-05T09:49:52.000Z</time>
      </trkpt>
      <trkpt lat="44.12667" lon="5.27323">
        <ele>910.40002441406</ele>
        <time>2017-05-05T09:49:53.000Z</time>
      </trkpt>
      <trkpt lat="44.12668" lon="5.27289">
        <ele>907</ele>
        <time>2017-05-05T09:49:55.000Z</time>
      </trkpt>
      <trkpt lat="44.12663" lon="5.27213">
        <ele>902.59997558594</ele>
        <time>2017-05-05T09:49:59.000Z</time>
      </trkpt>
      <trkpt lat="44.12656" lon="5.27136">
        <ele>896.40002441406</ele>
        <time>2017-05-05T09:50:03.000Z</time>
      </trkpt>
      <trkpt lat="44.1265" lon="5.271">
        <ele>893.59997558594</ele>
        <time>2017-05-05T09:50:04.000Z</time>
      </trkpt>
      <trkpt lat="44.12639" lon="5.27067">
        <ele>891.59997558594</ele>
        <time>2017-05-05T09:50:07.000Z</time>
      </trkpt>
      <trkpt lat="44.12624" lon="5.27021">
        <ele>887.79998779297</ele>
        <time>2017-05-05T09:50:10.000Z</time>
      </trkpt>
      <trkpt lat="44.12605" lon="5.26943">
        <ele>878.40002441406</ele>
        <time>2017-05-05T09:50:15.000Z</time>
      </trkpt>
      <trkpt lat="44.1258" lon="5.26869">
        <ele>872.79998779297</ele>
        <time>2017-05-05T09:50:20.000Z</time>
      </trkpt>
      <trkpt lat="44.12551" lon="5.26803">
        <ele>868.40002441406</ele>
        <time>2017-05-05T09:50:25.000Z</time>
      </trkpt>
      <trkpt lat="44.12529" lon="5.26765">
        <ele>864</ele>
        <time>2017-05-05T09:50:28.000Z</time>
      </trkpt>
      <trkpt lat="44.12501" lon="5.2669">
        <ele>853.59997558594</ele>
        <time>2017-05-05T09:50:33.000Z</time>
      </trkpt>
      <trkpt lat="44.12472" lon="5.26622">
        <ele>846.40002441406</ele>
        <time>2017-05-05T09:50:38.000Z</time>
      </trkpt>
      <trkpt lat="44.12466" lon="5.26612">
        <ele>845</ele>
        <time>2017-05-05T09:50:39.000Z</time>
      </trkpt>
      <trkpt lat="44.12422" lon="5.26548">
        <ele>836.40002441406</ele>
        <time>2017-05-05T09:50:45.000Z</time>
      </trkpt>
      <trkpt lat="44.12398" lon="5.26486">
        <ele>830.40002441406</ele>
        <time>2017-05-05T09:50:50.000Z</time>
      </trkpt>
      <trkpt lat="44.12398" lon="5.26458">
        <ele>827</ele>
        <time>2017-05-05T09:50:52.000Z</time>
      </trkpt>
      <trkpt lat="44.12405" lon="5.26427">
        <ele>824.20001220703</ele>
        <time>2017-05-05T09:50:54.000Z</time>
      </trkpt>
      <trkpt lat="44.12426" lon="5.26347">
        <ele>816.79998779297</ele>
        <time>2017-05-05T09:50:59.000Z</time>
      </trkpt>
      <trkpt lat="44.12439" lon="5.26264">
        <ele>810.20001220703</ele>
        <time>2017-05-05T09:51:04.000Z</time>
      </trkpt>
      <trkpt lat="44.12454" lon="5.26186">
        <ele>805.40002441406</ele>
        <time>2017-05-05T09:51:09.000Z</time>
      </trkpt>
      <trkpt lat="44.12457" lon="5.26158">
        <ele>803.59997558594</ele>
        <time>2017-05-05T09:51:11.000Z</time>
      </trkpt>
      <trkpt lat="44.12455" lon="5.2613">
        <ele>801.20001220703</ele>
        <time>2017-05-05T09:51:13.000Z</time>
      </trkpt>
      <trkpt lat="44.12436" lon="5.26061">
        <ele>796</ele>
        <time>2017-05-05T09:51:18.000Z</time>
      </trkpt>
      <trkpt lat="44.12436" lon="5.25977">
        <ele>786.40002441406</ele>
        <time>2017-05-05T09:51:23.000Z</time>
      </trkpt>
      <trkpt lat="44.12449" lon="5.25904">
        <ele>785.20001220703</ele>
        <time>2017-05-05T09:51:28.000Z</time>
      </trkpt>
      <trkpt lat="44.12463" lon="5.25879">
        <ele>783.40002441406</ele>
        <time>2017-05-05T09:51:30.000Z</time>
      </trkpt>
      <trkpt lat="44.12501" lon="5.25826">
        <ele>776.20001220703</ele>
        <time>2017-05-05T09:51:35.000Z</time>
      </trkpt>
      <trkpt lat="44.12513" lon="5.25803">
        <ele>772.79998779297</ele>
        <time>2017-05-05T09:51:37.000Z</time>
      </trkpt>
      <trkpt lat="44.12517" lon="5.25774">
        <ele>769.79998779297</ele>
        <time>2017-05-05T09:51:39.000Z</time>
      </trkpt>
      <trkpt lat="44.12512" lon="5.25743">
        <ele>767.59997558594</ele>
        <time>2017-05-05T09:51:41.000Z</time>
      </trkpt>
      <trkpt lat="44.12492" lon="5.2566">
        <ele>762.79998779297</ele>
        <time>2017-05-05T09:51:46.000Z</time>
      </trkpt>
      <trkpt lat="44.12474" lon="5.2558">
        <ele>759.40002441406</ele>
        <time>2017-05-05T09:51:51.000Z</time>
      </trkpt>
      <trkpt lat="44.12465" lon="5.25495">
        <ele>754.59997558594</ele>
        <time>2017-05-05T09:51:56.000Z</time>
      </trkpt>
      <trkpt lat="44.12468" lon="5.25408">
        <ele>746.40002441406</ele>
        <time>2017-05-05T09:52:01.000Z</time>
      </trkpt>
      <trkpt lat="44.12469" lon="5.25378">
        <ele>744.79998779297</ele>
        <time>2017-05-05T09:52:03.000Z</time>
      </trkpt>
      <trkpt lat="44.12466" lon="5.25348">
        <ele>740.20001220703</ele>
        <time>2017-05-05T09:52:05.000Z</time>
      </trkpt>
      <trkpt lat="44.12456" lon="5.2532">
        <ele>736.59997558594</ele>
        <time>2017-05-05T09:52:07.000Z</time>
      </trkpt>
      <trkpt lat="44.12416" lon="5.25254">
        <ele>732</ele>
        <time>2017-05-05T09:52:12.000Z</time>
      </trkpt>
      <trkpt lat="44.12371" lon="5.25185">
        <ele>727</ele>
        <time>2017-05-05T09:52:17.000Z</time>
      </trkpt>
      <trkpt lat="44.12328" lon="5.25115">
        <ele>719.79998779297</ele>
        <time>2017-05-05T09:52:22.000Z</time>
      </trkpt>
      <trkpt lat="44.12294" lon="5.25056">
        <ele>715</ele>
        <time>2017-05-05T09:52:26.000Z</time>
      </trkpt>
      <trkpt lat="44.12252" lon="5.24985">
        <ele>704.59997558594</ele>
        <time>2017-05-05T09:52:31.000Z</time>
      </trkpt>
      <trkpt lat="44.12213" lon="5.2492">
        <ele>693</ele>
        <time>2017-05-05T09:52:37.000Z</time>
      </trkpt>
      <trkpt lat="44.12208" lon="5.24913">
        <ele>691.79998779297</ele>
        <time>2017-05-05T09:52:38.000Z</time>
      </trkpt>
      <trkpt lat="44.1219" lon="5.24909">
        <ele>690.40002441406</ele>
        <time>2017-05-05T09:52:40.000Z</time>
      </trkpt>
      <trkpt lat="44.12133" lon="5.24928">
        <ele>691.59997558594</ele>
        <time>2017-05-05T09:52:47.000Z</time>
      </trkpt>
      <trkpt lat="44.12122" lon="5.24919">
        <ele>689.79998779297</ele>
        <time>2017-05-05T09:52:49.000Z</time>
      </trkpt>
      <trkpt lat="44.12112" lon="5.24901">
        <ele>686.20001220703</ele>
        <time>2017-05-05T09:52:51.000Z</time>
      </trkpt>
      <trkpt lat="44.12095" lon="5.24875">
        <ele>680.40002441406</ele>
        <time>2017-05-05T09:52:54.000Z</time>
      </trkpt>
      <trkpt lat="44.12078" lon="5.2487">
        <ele>678.59997558594</ele>
        <time>2017-05-05T09:52:56.000Z</time>
      </trkpt>
      <trkpt lat="44.12064" lon="5.24867">
        <ele>677.40002441406</ele>
        <time>2017-05-05T09:52:58.000Z</time>
      </trkpt>
      <trkpt lat="44.12034" lon="5.24858">
        <ele>674.20001220703</ele>
        <time>2017-05-05T09:53:02.000Z</time>
      </trkpt>
      <trkpt lat="44.12017" lon="5.24858">
        <ele>672.59997558594</ele>
        <time>2017-05-05T09:53:04.000Z</time>
      </trkpt>
      <trkpt lat="44.11979" lon="5.2484">
        <ele>667</ele>
        <time>2017-05-05T09:53:08.000Z</time>
      </trkpt>
      <trkpt lat="44.11939" lon="5.24808">
        <ele>658.59997558594</ele>
        <time>2017-05-05T09:53:13.000Z</time>
      </trkpt>
      <trkpt lat="44.11923" lon="5.24801">
        <ele>656.59997558594</ele>
        <time>2017-05-05T09:53:16.000Z</time>
      </trkpt>
      <trkpt lat="44.11888" lon="5.2479">
        <ele>653.59997558594</ele>
        <time>2017-05-05T09:53:21.000Z</time>
      </trkpt>
      <trkpt lat="44.1187" lon="5.24777">
        <ele>651</ele>
        <time>2017-05-05T09:53:23.000Z</time>
      </trkpt>
      <trkpt lat="44.11824" lon="5.24731">
        <ele>642.40002441406</ele>
        <time>2017-05-05T09:53:28.000Z</time>
      </trkpt>
      <trkpt lat="44.11771" lon="5.24693">
        <ele>635.20001220703</ele>
        <time>2017-05-05T09:53:33.000Z</time>
      </trkpt>
      <trkpt lat="44.11718" lon="5.24637">
        <ele>628.40002441406</ele>
        <time>2017-05-05T09:53:38.000Z</time>
      </trkpt>
      <trkpt lat="44.11676" lon="5.24589">
        <ele>622</ele>
        <time>2017-05-05T09:53:42.000Z</time>
      </trkpt>
      <trkpt lat="44.11628" lon="5.24532">
        <ele>613.79998779297</ele>
        <time>2017-05-05T09:53:47.000Z</time>
      </trkpt>
      <trkpt lat="44.11585" lon="5.24483">
        <ele>607</ele>
        <time>2017-05-05T09:53:52.000Z</time>
      </trkpt>
      <trkpt lat="44.11547" lon="5.24433">
        <ele>601.79998779297</ele>
        <time>2017-05-05T09:53:58.000Z</time>
      </trkpt>
      <trkpt lat="44.11542" lon="5.2441">
        <ele>599.20001220703</ele>
        <time>2017-05-05T09:54:00.000Z</time>
      </trkpt>
      <trkpt lat="44.11547" lon="5.24382">
        <ele>596</ele>
        <time>2017-05-05T09:54:02.000Z</time>
      </trkpt>
      <trkpt lat="44.11559" lon="5.24357">
        <ele>594</ele>
        <time>2017-05-05T09:54:04.000Z</time>
      </trkpt>
      <trkpt lat="44.11594" lon="5.24296">
        <ele>587.59997558594</ele>
        <time>2017-05-05T09:54:09.000Z</time>
      </trkpt>
      <trkpt lat="44.1161" lon="5.2427">
        <ele>583.59997558594</ele>
        <time>2017-05-05T09:54:12.000Z</time>
      </trkpt>
      <trkpt lat="44.11611" lon="5.24253">
        <ele>581.40002441406</ele>
        <time>2017-05-05T09:54:14.000Z</time>
      </trkpt>
      <trkpt lat="44.11603" lon="5.24235">
        <ele>579.79998779297</ele>
        <time>2017-05-05T09:54:16.000Z</time>
      </trkpt>
      <trkpt lat="44.11574" lon="5.24201">
        <ele>577.79998779297</ele>
        <time>2017-05-05T09:54:20.000Z</time>
      </trkpt>
      <trkpt lat="44.11523" lon="5.24168">
        <ele>576.59997558594</ele>
        <time>2017-05-05T09:54:25.000Z</time>
      </trkpt>
      <trkpt lat="44.11504" lon="5.24152">
        <ele>574</ele>
        <time>2017-05-05T09:54:27.000Z</time>
      </trkpt>
      <trkpt lat="44.11458" lon="5.24094">
        <ele>564.79998779297</ele>
        <time>2017-05-05T09:54:32.000Z</time>
      </trkpt>
      <trkpt lat="44.11417" lon="5.24036">
        <ele>555</ele>
        <time>2017-05-05T09:54:37.000Z</time>
      </trkpt>
      <trkpt lat="44.11403" lon="5.24017">
        <ele>552.40002441406</ele>
        <time>2017-05-05T09:54:39.000Z</time>
      </trkpt>
      <trkpt lat="44.11387" lon="5.24004">
        <ele>550.40002441406</ele>
        <time>2017-05-05T09:54:41.000Z</time>
      </trkpt>
      <trkpt lat="44.11356" lon="5.23986">
        <ele>547.40002441406</ele>
        <time>2017-05-05T09:54:46.000Z</time>
      </trkpt>
      <trkpt lat="44.1135" lon="5.23977">
        <ele>546.20001220703</ele>
        <time>2017-05-05T09:54:48.000Z</time>
      </trkpt>
      <trkpt lat="44.11355" lon="5.23965">
        <ele>545.20001220703</ele>
        <time>2017-05-05T09:54:50.000Z</time>
      </trkpt>
      <trkpt lat="44.11367" lon="5.23964">
        <ele>545</ele>
        <time>2017-05-05T09:54:52.000Z</time>
      </trkpt>
      <trkpt lat="44.11407" lon="5.23974">
        <ele>545.40002441406</ele>
        <time>2017-05-05T09:54:57.000Z</time>
      </trkpt>
      <trkpt lat="44.11443" lon="5.23996">
        <ele>548.20001220703</ele>
        <time>2017-05-05T09:55:01.000Z</time>
      </trkpt>
      <trkpt lat="44.11488" lon="5.24032">
        <ele>549.59997558594</ele>
        <time>2017-05-05T09:55:06.000Z</time>
      </trkpt>
      <trkpt lat="44.1151" lon="5.24036">
        <ele>548</ele>
        <time>2017-05-05T09:55:08.000Z</time>
      </trkpt>
      <trkpt lat="44.11567" lon="5.24032">
        <ele>542.40002441406</ele>
        <time>2017-05-05T09:55:13.000Z</time>
      </trkpt>
      <trkpt lat="44.11587" lon="5.24023">
        <ele>539.40002441406</ele>
        <time>2017-05-05T09:55:15.000Z</time>
      </trkpt>
      <trkpt lat="44.11603" lon="5.24007">
        <ele>537.20001220703</ele>
        <time>2017-05-05T09:55:17.000Z</time>
      </trkpt>
      <trkpt lat="44.11645" lon="5.23951">
        <ele>536.40002441406</ele>
        <time>2017-05-05T09:55:23.000Z</time>
      </trkpt>
      <trkpt lat="44.11684" lon="5.23897">
        <ele>533.79998779297</ele>
        <time>2017-05-05T09:55:29.000Z</time>
      </trkpt>
      <trkpt lat="44.11727" lon="5.23839">
        <ele>534</ele>
        <time>2017-05-05T09:55:36.000Z</time>
      </trkpt>
      <trkpt lat="44.11736" lon="5.23818">
        <ele>533</ele>
        <time>2017-05-05T09:55:38.000Z</time>
      </trkpt>
      <trkpt lat="44.11741" lon="5.23793">
        <ele>530.59997558594</ele>
        <time>2017-05-05T09:55:40.000Z</time>
      </trkpt>
      <trkpt lat="44.11752" lon="5.23714">
        <ele>523</ele>
        <time>2017-05-05T09:55:46.000Z</time>
      </trkpt>
      <trkpt lat="44.11758" lon="5.23649">
        <ele>520.20001220703</ele>
        <time>2017-05-05T09:55:51.000Z</time>
      </trkpt>
      <trkpt lat="44.11748" lon="5.23574">
        <ele>514.79998779297</ele>
        <time>2017-05-05T09:55:57.000Z</time>
      </trkpt>
      <trkpt lat="44.11746" lon="5.2355">
        <ele>513.79998779297</ele>
        <time>2017-05-05T09:55:59.000Z</time>
      </trkpt>
      <trkpt lat="44.11749" lon="5.23528">
        <ele>513.20001220703</ele>
        <time>2017-05-05T09:56:01.000Z</time>
      </trkpt>
      <trkpt lat="44.11758" lon="5.23508">
        <ele>513.79998779297</ele>
        <time>2017-05-05T09:56:03.000Z</time>
      </trkpt>
      <trkpt lat="44.11781" lon="5.23472">
        <ele>515.59997558594</ele>
        <time>2017-05-05T09:56:07.000Z</time>
      </trkpt>
      <trkpt lat="44.11802" lon="5.234">
        <ele>513.40002441406</ele>
        <time>2017-05-05T09:56:13.000Z</time>
      </trkpt>
      <trkpt lat="44.11807" lon="5.23388">
        <ele>513.40002441406</ele>
        <time>2017-05-05T09:56:14.000Z</time>
      </trkpt>
      <trkpt lat="44.11845" lon="5.23333">
        <ele>514.79998779297</ele>
        <time>2017-05-05T09:56:19.000Z</time>
      </trkpt>
      <trkpt lat="44.11888" lon="5.23275">
        <ele>512</ele>
        <time>2017-05-05T09:56:24.000Z</time>
      </trkpt>
      <trkpt lat="44.11932" lon="5.23216">
        <ele>507</ele>
        <time>2017-05-05T09:56:29.000Z</time>
      </trkpt>
      <trkpt lat="44.11976" lon="5.23157">
        <ele>504.20001220703</ele>
        <time>2017-05-05T09:56:34.000Z</time>
      </trkpt>
      <trkpt lat="44.1202" lon="5.23096">
        <ele>501.60000610352</ele>
        <time>2017-05-05T09:56:39.000Z</time>
      </trkpt>
      <trkpt lat="44.12043" lon="5.23059">
        <ele>500</ele>
        <time>2017-05-05T09:56:42.000Z</time>
      </trkpt>
      <trkpt lat="44.12054" lon="5.2303">
        <ele>496.60000610352</ele>
        <time>2017-05-05T09:56:44.000Z</time>
      </trkpt>
      <trkpt lat="44.12055" lon="5.22997">
        <ele>492.20001220703</ele>
        <time>2017-05-05T09:56:46.000Z</time>
      </trkpt>
      <trkpt lat="44.12044" lon="5.22912">
        <ele>484</ele>
        <time>2017-05-05T09:56:51.000Z</time>
      </trkpt>
      <trkpt lat="44.12031" lon="5.22825">
        <ele>478.20001220703</ele>
        <time>2017-05-05T09:56:56.000Z</time>
      </trkpt>
      <trkpt lat="44.12022" lon="5.22738">
        <ele>476.60000610352</ele>
        <time>2017-05-05T09:57:01.000Z</time>
      </trkpt>
      <trkpt lat="44.1203" lon="5.22648">
        <ele>473.20001220703</ele>
        <time>2017-05-05T09:57:06.000Z</time>
      </trkpt>
      <trkpt lat="44.12041" lon="5.2256">
        <ele>467.39999389648</ele>
        <time>2017-05-05T09:57:11.000Z</time>
      </trkpt>
      <trkpt lat="44.1205" lon="5.2248">
        <ele>463.60000610352</ele>
        <time>2017-05-05T09:57:16.000Z</time>
      </trkpt>
      <trkpt lat="44.12054" lon="5.22434">
        <ele>462.20001220703</ele>
        <time>2017-05-05T09:57:19.000Z</time>
      </trkpt>
      <trkpt lat="44.12052" lon="5.22405">
        <ele>461</ele>
        <time>2017-05-05T09:57:21.000Z</time>
      </trkpt>
      <trkpt lat="44.12036" lon="5.22321">
        <ele>457.20001220703</ele>
        <time>2017-05-05T09:57:27.000Z</time>
      </trkpt>
      <trkpt lat="44.12028" lon="5.22254">
        <ele>455.60000610352</ele>
        <time>2017-05-05T09:57:32.000Z</time>
      </trkpt>
      <trkpt lat="44.12032" lon="5.22226">
        <ele>455.60000610352</ele>
        <time>2017-05-05T09:57:34.000Z</time>
      </trkpt>
      <trkpt lat="44.12054" lon="5.22145">
        <ele>451</ele>
        <time>2017-05-05T09:57:40.000Z</time>
      </trkpt>
      <trkpt lat="44.12084" lon="5.22066">
        <ele>448</ele>
        <time>2017-05-05T09:57:46.000Z</time>
      </trkpt>
      <trkpt lat="44.1211" lon="5.22">
        <ele>446.39999389648</ele>
        <time>2017-05-05T09:57:51.000Z</time>
      </trkpt>
      <trkpt lat="44.12135" lon="5.21931">
        <ele>443.79998779297</ele>
        <time>2017-05-05T09:57:56.000Z</time>
      </trkpt>
      <trkpt lat="44.12157" lon="5.21856">
        <ele>439.60000610352</ele>
        <time>2017-05-05T09:58:01.000Z</time>
      </trkpt>
      <trkpt lat="44.12179" lon="5.21777">
        <ele>434.39999389648</ele>
        <time>2017-05-05T09:58:06.000Z</time>
      </trkpt>
      <trkpt lat="44.12201" lon="5.21696">
        <ele>429</ele>
        <time>2017-05-05T09:58:11.000Z</time>
      </trkpt>
      <trkpt lat="44.12222" lon="5.21615">
        <ele>423</ele>
        <time>2017-05-05T09:58:16.000Z</time>
      </trkpt>
      <trkpt lat="44.12224" lon="5.21583">
        <ele>421.39999389648</ele>
        <time>2017-05-05T09:58:18.000Z</time>
      </trkpt>
      <trkpt lat="44.12205" lon="5.21505">
        <ele>417.60000610352</ele>
        <time>2017-05-05T09:58:23.000Z</time>
      </trkpt>
      <trkpt lat="44.12178" lon="5.21428">
        <ele>413.79998779297</ele>
        <time>2017-05-05T09:58:28.000Z</time>
      </trkpt>
      <trkpt lat="44.1214" lon="5.2136">
        <ele>409.39999389648</ele>
        <time>2017-05-05T09:58:33.000Z</time>
      </trkpt>
      <trkpt lat="44.12103" lon="5.21293">
        <ele>405.79998779297</ele>
        <time>2017-05-05T09:58:38.000Z</time>
      </trkpt>
      <trkpt lat="44.1207" lon="5.21231">
        <ele>403.20001220703</ele>
        <time>2017-05-05T09:58:43.000Z</time>
      </trkpt>
      <trkpt lat="44.12035" lon="5.21155">
        <ele>400.79998779297</ele>
        <time>2017-05-05T09:58:49.000Z</time>
      </trkpt>
      <trkpt lat="44.12032" lon="5.21141">
        <ele>400.39999389648</ele>
        <time>2017-05-05T09:58:50.000Z</time>
      </trkpt>
      <trkpt lat="44.12018" lon="5.21064">
        <ele>395</ele>
        <time>2017-05-05T09:58:55.000Z</time>
      </trkpt>
      <trkpt lat="44.12004" lon="5.20986">
        <ele>390</ele>
        <time>2017-05-05T09:59:00.000Z</time>
      </trkpt>
      <trkpt lat="44.11992" lon="5.2091">
        <ele>386.39999389648</ele>
        <time>2017-05-05T09:59:05.000Z</time>
      </trkpt>
      <trkpt lat="44.11991" lon="5.20894">
        <ele>386</ele>
        <time>2017-05-05T09:59:06.000Z</time>
      </trkpt>
      <trkpt lat="44.11991" lon="5.20846">
        <ele>385</ele>
        <time>2017-05-05T09:59:09.000Z</time>
      </trkpt>
      <trkpt lat="44.11999" lon="5.20766">
        <ele>382.60000610352</ele>
        <time>2017-05-05T09:59:14.000Z</time>
      </trkpt>
      <trkpt lat="44.12008" lon="5.20686">
        <ele>380.60000610352</ele>
        <time>2017-05-05T09:59:19.000Z</time>
      </trkpt>
      <trkpt lat="44.12015" lon="5.2061">
        <ele>378.60000610352</ele>
        <time>2017-05-05T09:59:24.000Z</time>
      </trkpt>
      <trkpt lat="44.12018" lon="5.20532">
        <ele>377.60000610352</ele>
        <time>2017-05-05T09:59:29.000Z</time>
      </trkpt>
      <trkpt lat="44.12013" lon="5.20452">
        <ele>375</ele>
        <time>2017-05-05T09:59:34.000Z</time>
      </trkpt>
      <trkpt lat="44.12006" lon="5.20375">
        <ele>373.79998779297</ele>
        <time>2017-05-05T09:59:39.000Z</time>
      </trkpt>
      <trkpt lat="44.11998" lon="5.20289">
        <ele>369.20001220703</ele>
        <time>2017-05-05T09:59:45.000Z</time>
      </trkpt>
      <trkpt lat="44.1199" lon="5.20205">
        <ele>366</ele>
        <time>2017-05-05T09:59:51.000Z</time>
      </trkpt>
      <trkpt lat="44.11984" lon="5.20163">
        <ele>364.79998779297</ele>
        <time>2017-05-05T09:59:54.000Z</time>
      </trkpt>
      <trkpt lat="44.11974" lon="5.20138">
        <ele>363.60000610352</ele>
        <time>2017-05-05T09:59:56.000Z</time>
      </trkpt>
      <trkpt lat="44.11929" lon="5.20081">
        <ele>360.20001220703</ele>
        <time>2017-05-05T10:00:02.000Z</time>
      </trkpt>
      <trkpt lat="44.11879" lon="5.20049">
        <ele>358.39999389648</ele>
        <time>2017-05-05T10:00:08.000Z</time>
      </trkpt>
      <trkpt lat="44.1186" lon="5.20038">
        <ele>357.79998779297</ele>
        <time>2017-05-05T10:00:11.000Z</time>
      </trkpt>
      <trkpt lat="44.11851" lon="5.20027">
        <ele>357.39999389648</ele>
        <time>2017-05-05T10:00:13.000Z</time>
      </trkpt>
      <trkpt lat="44.11847" lon="5.20008">
        <ele>357</ele>
        <time>2017-05-05T10:00:15.000Z</time>
      </trkpt>
      <trkpt lat="44.1185" lon="5.19987">
        <ele>356.39999389648</ele>
        <time>2017-05-05T10:00:17.000Z</time>
      </trkpt>
      <trkpt lat="44.11873" lon="5.19917">
        <ele>354.20001220703</ele>
        <time>2017-05-05T10:00:23.000Z</time>
      </trkpt>
      <trkpt lat="44.11906" lon="5.19847">
        <ele>351.39999389648</ele>
        <time>2017-05-05T10:00:29.000Z</time>
      </trkpt>
      <trkpt lat="44.11939" lon="5.19783">
        <ele>350.60000610352</ele>
        <time>2017-05-05T10:00:35.000Z</time>
      </trkpt>
      <trkpt lat="44.11974" lon="5.19714">
        <ele>349.20001220703</ele>
        <time>2017-05-05T10:00:42.000Z</time>
      </trkpt>
      <trkpt lat="44.12007" lon="5.19643">
        <ele>346.39999389648</ele>
        <time>2017-05-05T10:00:49.000Z</time>
      </trkpt>
      <trkpt lat="44.12034" lon="5.19575">
        <ele>344.39999389648</ele>
        <time>2017-05-05T10:00:55.000Z</time>
      </trkpt>
      <trkpt lat="44.12061" lon="5.195">
        <ele>341.20001220703</ele>
        <time>2017-05-05T10:01:01.000Z</time>
      </trkpt>
      <trkpt lat="44.12084" lon="5.19418">
        <ele>338.60000610352</ele>
        <time>2017-05-05T10:01:07.000Z</time>
      </trkpt>
      <trkpt lat="44.12106" lon="5.19337">
        <ele>336.39999389648</ele>
        <time>2017-05-05T10:01:13.000Z</time>
      </trkpt>
      <trkpt lat="44.12126" lon="5.19263">
        <ele>335</ele>
        <time>2017-05-05T10:01:19.000Z</time>
      </trkpt>
      <trkpt lat="44.12149" lon="5.19185">
        <ele>333</ele>
        <time>2017-05-05T10:01:26.000Z</time>
      </trkpt>
      <trkpt lat="44.12177" lon="5.19119">
        <ele>332.60000610352</ele>
        <time>2017-05-05T10:01:33.000Z</time>
      </trkpt>
      <trkpt lat="44.12206" lon="5.19048">
        <ele>332.20001220703</ele>
        <time>2017-05-05T10:01:40.000Z</time>
      </trkpt>
      <trkpt lat="44.12231" lon="5.19001">
        <ele>333</ele>
        <time>2017-05-05T10:01:45.000Z</time>
      </trkpt>
      <trkpt lat="44.1228" lon="5.18959">
        <ele>333</ele>
        <time>2017-05-05T10:01:52.000Z</time>
      </trkpt>
      <trkpt lat="44.12329" lon="5.18919">
        <ele>332.39999389648</ele>
        <time>2017-05-05T10:01:59.000Z</time>
      </trkpt>
      <trkpt lat="44.1234" lon="5.18903">
        <ele>331.79998779297</ele>
        <time>2017-05-05T10:02:01.000Z</time>
      </trkpt>
      <trkpt lat="44.12363" lon="5.18825">
        <ele>325.79998779297</ele>
        <time>2017-05-05T10:02:08.000Z</time>
      </trkpt>
      <trkpt lat="44.12379" lon="5.18745">
        <ele>319.39999389648</ele>
        <time>2017-05-05T10:02:14.000Z</time>
      </trkpt>
      <trkpt lat="44.12397" lon="5.18665">
        <ele>316.20001220703</ele>
        <time>2017-05-05T10:02:20.000Z</time>
      </trkpt>
      <trkpt lat="44.12414" lon="5.18587">
        <ele>314.60000610352</ele>
        <time>2017-05-05T10:02:26.000Z</time>
      </trkpt>
      <trkpt lat="44.1243" lon="5.18512">
        <ele>313.79998779297</ele>
        <time>2017-05-05T10:02:32.000Z</time>
      </trkpt>
      <trkpt lat="44.12447" lon="5.18432">
        <ele>313.79998779297</ele>
        <time>2017-05-05T10:02:40.000Z</time>
      </trkpt>
      <trkpt lat="44.12452" lon="5.18409">
        <ele>313.79998779297</ele>
        <time>2017-05-05T10:02:43.000Z</time>
      </trkpt>
      <trkpt lat="44.12452" lon="5.18395">
        <ele>313.60000610352</ele>
        <time>2017-05-05T10:02:45.000Z</time>
      </trkpt>
      <trkpt lat="44.12447" lon="5.18384">
        <ele>313.20001220703</ele>
        <time>2017-05-05T10:02:47.000Z</time>
      </trkpt>
      <trkpt lat="44.12444" lon="5.18372">
        <ele>312.79998779297</ele>
        <time>2017-05-05T10:02:49.000Z</time>
      </trkpt>
      <trkpt lat="44.12447" lon="5.1836">
        <ele>312.60000610352</ele>
        <time>2017-05-05T10:02:51.000Z</time>
      </trkpt>
      <trkpt lat="44.12458" lon="5.18337">
        <ele>312.39999389648</ele>
        <time>2017-05-05T10:02:56.000Z</time>
      </trkpt>
      <trkpt lat="44.12455" lon="5.1833">
        <ele>312.20001220703</ele>
        <time>2017-05-05T10:02:58.000Z</time>
      </trkpt>
      <trkpt lat="44.12434" lon="5.18322">
        <ele>311.39999389648</ele>
        <time>2017-05-05T10:03:09.000Z</time>
      </trkpt>
    </trkseg>
  </trk>
</gpx>`;

export default function Map() {
  const ref = useRef<HTMLDivElement>(null);

  const { startAnimation } = useJourneyAnimation({
    containerRef: ref,
    gpxContent: SAMPLE_GPX,
    animationSpeed: 30,
    mapboxToken: import.meta.env.VITE_MAPBOX_TOKEN,
    startColor: "#34c759", // Green (behind)
    endColor: "#1a73e8", // Blue (dot)
    aheadColor: "red", // Light gray (ahead)
  });

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div ref={ref} style={{ width: "100%", height: "100%" }} />
      <button
        onClick={startAnimation}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
          padding: "12px 20px",
          background: "white",
          border: "1px solid #ddd",
          borderRadius: 6,
          fontWeight: "bold",
        }}
      >
        Start Journey
      </button>
    </div>
  );
}
