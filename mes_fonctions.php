<?php
// menu_lang plat sans URL sur la langue sélectionnée
function url_lang ($langues) {
    include_spip('inc/charsets');
    $texte = '';
    $tab_langues = explode(',', $GLOBALS['meta']['langues_multilingue']);
    while ( list($clef, $valeur) = each($tab_langues) ) 
	if ($valeur == $GLOBALS['spip_lang']) { 
	$texte .= '<li><a class="enabled" href="">'.traduire_nom_langue($valeur).'</a></li>'; 
	}
	else { $GLOBALS['delais'] = 0;
	$texte .= '<li><a href="'.parametre_url(generer_url_action('cookie'), 'url', parametre_url(self(true), '&'), '&').'&var_lang='.$valeur.'" title="'.traduire_nom_langue($valeur).'">'.traduire_nom_langue($valeur).'</a></li>'; 
	}
    return $texte;
}
//fin

function recherche_avancee_google_like($string, $resume='')

{	// Convertir en texte brut sans accent

	$string = textebrut($string);

	$string = translitteration($string);

	$rech = translitteration($_GET['recherche']);

	// Supprimer les caracteres qui m...

	$badguy = array("^", "/", "\\", "$", "@", "*");

	$rech = str_replace($badguy,"",$rech);

	// en avant

	$query = rtrim(str_replace("+", " ", $rech));  

	$qt = explode(" ", $query);

	$num = count ($qt);

	// $cc = ceil(55 / $num);

	$cc=55;

	for ($i = 0; $i < $num; $i++) 

	{	//$tab[$i] = preg_split("/($qt[$i])/i",$string,2, PREG_SPLIT_DELIM_CAPTURE);

		$tab[$i] = preg_split("/\b($qt[$i])/i",$string,2, PREG_SPLIT_DELIM_CAPTURE);

		if(count($tab[$i])>1)

		{	// Chaine avant

			$avant = substr($tab[$i][0],-$cc,$cc);

			$mots = split(" ",$avant,2);

			if (count($mots)>1) $avant = $mots[1];

			// Chaine apres

			$apres = substr($tab[$i][2],0,$cc);

			$apres = preg_replace('@(.+)\s\S+@s', '\1', $apres);

			// Concatener

			if ($string_re=='') $string_re = "<i class=rsusp>[...]</i>";

			$string_re .= " $avant<span class=spip_surligne>".$tab[$i][1]."</span>$apres <i class=rsusp>[...]</i> ";

		}

	}

	// Si rien trouve : renvoyer les premiers mots en resume

	if ($resume!='' && $string_re=='')

	{	$mots = split(" ",$string,40);

		for ($i = 0; $i < count($mots)-1; $i++)

		{	$string_re .= $mots[$i]." ";

			if (strlen($string_re)>2*$cc) break;

		}

		$string_re .= "<i class=rsusp>[...]</i>";

	}

	return $string_re;

}
/* Fonction qui perment de recadrer et reduire les images */
function image_reduire_recadre($img, $largeur, $hauteur, $position='center') {
       include_spip('inc/filtres_images');
       if ($img!='IMG/'){
            list ($ret["hauteur"],$ret["largeur"]) = taille_image($img);
            $ratio_x = $ret["largeur"]/$largeur;
            $ratio_y = $ret["hauteur"]/$hauteur;
            $ratio   = ($ratio_x <= $ratio_y) ? $ratio_x : $ratio_y;
            return image_recadre(image_reduire_par($img, $ratio), $largeur, $hauteur, $position);
            }
}


?>
