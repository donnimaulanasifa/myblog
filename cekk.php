<?
global $wpdb;
$nim=strtolower($_POST['nim']);
if(isset($_POST) && $nim!=''){
 $sql=$wpdb->prepare("SELECT nim FROM oprec WHERE nim=?");
 $sql->execute(array($nim));
 if($sql->rowCount()==0){
  echo "available";
 }else{
  echo "not-available";
 }
}
?>
