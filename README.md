安装方式：
发布版本安装：./output/apk
开发环境搭建:
1（不推荐）:
	1）clone复制整个包
	2)$npm install
	
2：	1)$react-native init ReactNativeApp
	2)将./ReactNativeApp/app文件夹 复制到生成的./ReactNativeApp文件夹下
	3)按照原来的package.json添加 dependencies和devDependencies下面缺失的项
	4)复制.babelrc
	5)$npm i 
	6)调用原生模块的库需要与原生建立连接，除了输入react-native link命令以外可能需
	要修改android或ios目录下的文件
			*现在用到的需要与原生建立连接的库有react-netive-vector-icons。需要
			修改gradle.properties。具体步骤请查看github上的doc